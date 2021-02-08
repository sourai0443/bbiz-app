import React, {ReactNode} from "react";
import {ListItemIcon} from "@material-ui/core";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import NotificationsIcon from "@material-ui/core/SvgIcon/SvgIcon";
import Badge from "@material-ui/core/Badge";
import {MenuListInterface} from "./DataList";

export const PrimaryMenuList: React.FC<{iconList: ReactNode[], menuList: MenuListInterface[]}> = ({iconList, menuList}) => {
    return (
        <div>
            {   iconList.map((icon, index) => {
                    return (
                        <ListItem button onClick={menuList[index].onClicked()}>
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
