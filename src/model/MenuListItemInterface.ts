interface MenuListItemInterface {
    getId(): number,
    getTitle(): string,
    getBadge(): number,
    isSelected(): boolean,
    setSelected(select: boolean): void,

    onClicked(): () => void,
    setClickHandler(func: () => void): void,
    setBadge?(badge: number): void
}

export default MenuListItemInterface;