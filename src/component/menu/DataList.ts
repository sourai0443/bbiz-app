export interface MenuListInterface {
    getId(): number,
    getTitle(): string,
    getBadge(): number,
    isSelected(): boolean,
    setSelected(select: boolean): void,

    onClicked(): () => void,
    setClickHandler(func: () => void): void,
    setBadge?(badge: number): void
}

export class MenuList implements MenuListInterface{
    private id: number;
    private title: string;
    private selected: boolean;

    private badge?: number | undefined;
    private onClickHandler: () => void;

    constructor(id: number, title: string, select: boolean, onClickHandler: () => void, badge?: number | undefined) {
        this.id = id;
        this.title = title;
        this.selected = select;
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

    public isSelected(): boolean {
        return this.selected;
    }

    public setSelected(select: boolean): void {
        this.selected = select;
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