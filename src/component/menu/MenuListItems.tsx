// アイコンのリスト
import React, {ReactNode} from "react";
import HomeIcon from '@material-ui/icons/Home';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import ListAltIcon from '@material-ui/icons/ListAlt';
import LinkIcon from '@material-ui/icons/Link';
import MenuListItem from "../../model/impl/MenuListItem";

//  メイン機能のアイコン定義
export const primaryListIcons: ReactNode[] = [
    <HomeIcon/>,
    <ListAltIcon/>,
    <ContactSupportIcon/>,
    <LinkIcon/>
];

// メイン機能のデータ定義
// イベントハンドラは仮置きの定義
export const primaryListItems: MenuListItem[] = [
    new MenuListItem(1, "Home", false,() => {console.log("Home")}, 0),
    new MenuListItem(2, "Task", false, () => {console.log("Task")},5),
    new MenuListItem(3, "Question", false, () => {console.log("Question")},10),
    new MenuListItem(4, "Link", false, () => {console.log("Link")},100)
];