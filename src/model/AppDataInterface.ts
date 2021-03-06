/*
* TODO: LinkViewコンポーネントでレンダリングする際に、getter/setterが認識されていないため、プロパティ全てをprivateからpublicに変更して対応
*  それに関連して、updatedAt、createdAtをDateクラスからstringへと変更
*/

interface AppDataInterface {
    getId(): number;

    setId(value: number): void;

    getTitle(): string;

    setTitle(value: string): void;

    getDetail(): string;

    setDetail(value: string): void;

    getCreatedAt(): string;

    setCreatedAt(value: string): void;

    getUpdatedAt(): string;

    setUpdatedAt(value: string): void;

    getPath(): string;

    setPath(value: string): void;

    getLinkType(): string;

    setLinkType(value: string): void;
}

export default AppDataInterface;