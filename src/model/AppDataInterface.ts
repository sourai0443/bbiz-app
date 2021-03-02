interface AppDataInterface {
    getId(): number;

    setId(value: number): void;

    getTitle(): string;

    setTitle(value: string): void;

    getDetail(): string;

    setDetail(value: string): void;

    getCreatedAt(): Date;

    setCreatedAt(value: Date): void;

    getUpdatedAt(): Date;

    setUpdatedAt(value: Date): void;

    getPath(): string;

    setPath(value: string): void;

    getLinkType(): string;

    setLinkType(value: string): void;
}

export default AppDataInterface;