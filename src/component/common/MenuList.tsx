import React, {ReactNode} from "react";
import {ListItemIcon} from "@material-ui/core";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import NotificationsIcon from "@material-ui/core/SvgIcon/SvgIcon";
import Badge from "@material-ui/core/Badge";
import {MenuListInterface} from "./DataList";
import {useDispatch} from "react-redux";
import {setScreen} from "../../store/ScreenManager";

export const PrimaryMenuList: React.FC<{iconList: ReactNode[], menuList: MenuListInterface[]}> = ({iconList, menuList}) => {
    const dispatch = useDispatch();

    return (
        <div>
            {   iconList.map((icon, index) => {
                    return (
                        <ListItem button onClick={() => dispatch(setScreen(menuList[index].getTitle()))}>
                            <ListItemIcon>
                                { icon }
                                { menuList[index].getBadge() > 0 &&
                                        <Badge badgeContent={menuList[index].getBadge()} color="secondary">
                                            <NotificationsIcon />
                                        </Badge>
                                }
                            </ListItemIcon>
                            <ListItemText primary={menuList[index].getTitle()}/>
                        </ListItem>
                    )}
                )
            }
        </div>
    );
};
