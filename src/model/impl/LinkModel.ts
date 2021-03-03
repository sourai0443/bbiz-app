import AppDataInterface from "../AppDataInterface";

class LinkModel implements AppDataInterface {
    public id: number;
    public title: string;
    public detail: string;

    public createdAt: Date;
    public updatedAt: Date;

    public path: string;
    public linkType: string;

    constructor(id: number, detail: string, title: string, createdAt: Date, updatedAt: Date, path: string, linkType: string) {
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

    public getCreatedAt(): Date {
        return this.createdAt;
    }

    public setCreatedAt(value: Date): void {
        this.createdAt = value;
    }

    public getUpdatedAt(): Date {
        return this.updatedAt;
    }

    public setUpdatedAt(value: Date): void {
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