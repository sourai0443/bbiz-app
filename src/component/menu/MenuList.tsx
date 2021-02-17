import React, {ReactNode} from "react";
import {ListItemIcon} from "@material-ui/core";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import Badge from "@material-ui/core/Badge";
import MenuListItemInterface from "../../model/MenuListItemInterface";
import {useDispatch} from "react-redux";
import {setScreen} from "../../store/slice/ScreenSlice";

export const MenuList: React.FC<{iconList: ReactNode[], menuList: MenuListItemInterface[]}> = ({iconList, menuList}) => {
    const dispatch = useDispatch();

    return (
        <div>
            {   iconList.map((icon, index) => { const menuListItem: MenuListItemInterface = menuList[index];
                    return (
                        <ListItem button selected={menuListItem.isSelected()} key={index}
                                  onClick={() => dispatch(setScreen( {id: menuListItem.getId(), name: menuListItem.getTitle()
                                }))}
                        >
                            <ListItemIcon>
                                { icon }
                                { menuListItem.getBadge() > 0 &&
                                        <Badge badgeContent={menuListItem.getBadge()} color="secondary">
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
