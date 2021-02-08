export interface MenuListInterface {
    getId(): number,
    getTitle(): string,
    getBadge(): number,
    onClicked(): () => void,
    setClickHandler(func: () => void): void,
    setBadge?(badge: number): void
}

export class MenuList implements MenuListInterface{
    private id: number;
    private title: string;
    private badge?: number | undefined;
    private onClickHandler: () => void;

    constructor(id: number, title: string, onClickHandler: () => void, badge?: number | undefined) {
        this.id = id;
        this.title = title;
        this.badge = badge;
        this.onClickHandler = onClickHandler;
    }

    public getId(): number {
        return this.id;
    }

    public getTitle(): string {
        return this.title;
    }

    public getBadge(): number {
        if (this.badge === undefined) {
            return -1;
        }
        return this.badge;
    }

    public setBadge(badge: number) {
        this.badge = badge;
    }

    public onClicked(): () => void {
        return this.onClickHandler;
    }

    public setClickHandler(func: () => void): void {
        this.onClickHandler = func;
    }
}