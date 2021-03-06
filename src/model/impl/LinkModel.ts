import AppDataInterface from "../AppDataInterface";

/*
* TODO: LinkViewコンポーネントでレンダリングする際に、getter/setterが認識されていないため、プロパティ全てをprivateからpublicに変更して対応
*  それに関連して、updatedAt、createdAtをDateクラスからstringへと変更
*/
class LinkModel implements AppDataInterface {
    public id: number;
    public title: string;
    public detail: string;

    public createdAt: string;
    public updatedAt: string;

    public path: string;
    public linkType: string;

    constructor(id: number, detail: string, title: string, createdAt: string, updatedAt: string, path: string, linkType: string) {
        this.id = id;
        this.title = title;
        this.detail = detail;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;

        this.path = path;
        this.linkType = linkType;
    }

    public getId(): number {
        return this.id;
    }

    public setId(value: number): void {
        this.id = value;
    }

    public getTitle(): string {
        return this.title;
    }

    public setTitle(value: string): void {
        this.title = value;
    }


    public getDetail(): string {
        return this.detail;
    }

    public setDetail(value: string): void {
        this.detail = value;
    }

    public getCreatedAt(): string {
        return this.createdAt;
    }

    public setCreatedAt(value: string): void {
        this.createdAt = value;
    }

    public getUpdatedAt(): string {
        return this.updatedAt;
    }

    public setUpdatedAt(value: string): void {
        this.updatedAt = value;
    }

    public getPath(): string {
        return this.path;
    }

    public setPath(value: string): void {
        this.path = value;
    }

    public getLinkType(): string {
        return this.linkType;
    }

    public setLinkType(value: string): void {
        this.linkType = value;
    }
}

export default LinkModel;