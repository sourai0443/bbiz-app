import React from 'react';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import {MenuList} from "./MenuList";
import {RootStateOrAny, useDispatch, useSelector} from "react-redux";
import useStyles from "./MenuCommon.css";
import {ListSubheader} from "@material-ui/core";
import BrightnessHighIcon from '@material-ui/icons/BrightnessHigh';
import BrightnessLowIcon from '@material-ui/icons/BrightnessLow';
import MouseOverPopover from "../common/mouseOverPopup";
import {primaryListIcons, primaryListItems} from "./MenuListItems";
import {setDisplayMode} from "../../store/slice/DisplayModeSlice";

let prevScreenId: number;

const Menu: React.FC = (props) => {
    const classes = useStyles();
    const screen = useSelector((state: RootStateOrAny) => state.screenReducer);
    const displayMode = useSelector((state: RootStateOrAny) => state.displayModeReducer);
    const dispatch = useDispatch();

    const currentScreen = primaryListItems[screen.id - 1];

    primaryListItems[screen.id - 1].setSelected(true);
    if (prevScreenId !== undefined && prevScreenId !== screen.id) {
        primaryListItems[prevScreenId - 1].setSelected(false);
    }
    prevScreenId = screen.id;

    const toggleDrawer = () => {
        dispatch(setDisplayMode({
            isOpen: !displayMode.isOpen,
        }));
    };

    const toggleTheme = () => {
        dispatch(setDisplayMode({
            isDarkMode: !displayMode.isDarkMode,
        }));
    };

    return (
        <>
            <CssBaseline />
            <AppBar position="absolute" color={displayMode.isDarkMode ? "inherit" : "primary"} className={clsx(classes.appBar, displayMode.isOpen && classes.appBarShift)}>
                <Toolbar className={classes.toolbar} >
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={toggleDrawer}
                        className={clsx(classes.menuButton, displayMode.isOpen && classes.menuButtonHidden)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                        { screen.name }
                    </Typography>
                    <IconButton color="inherit">
                        <Badge badgeContent={currentScreen.getBadge()} color="secondary">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                    <IconButton color="inherit" onClick={toggleTheme}>
                        <MouseOverPopover text={
                            `Toggle to ${displayMode.isDarkMode ? "light" : "dark "} theme.`
                        }>
                            <Badge color="secondary">
                                {   displayMode.isDarkMode ?
                                        <BrightnessHighIcon />
                                    :
                                        <BrightnessLowIcon />
                                }
                            </Badge>
                        </MouseOverPopover>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                classes={{
                    paper: clsx(classes.drawerPaper, !displayMode.isOpen && classes.drawerPaperClose),
                }}
                open={displayMode.isOpen}
            >
                <div className={classes.toolbarIcon}>
                    <IconButton onClick={toggleDrawer}>
                        <ChevronLeftIcon />
                    </IconButton>
                </div>
                <Divider />
                <List >
                    <ListSubheader hidden={!displayMode.isOpen}>Main Apps</ListSubheader>
                    <MenuList iconList={primaryListIcons} menuList={primaryListItems} />
                </List>
                <Divider />
                <List>
                    <ListSubheader inset></ListSubheader>
                </List>
            </Drawer>
        </>
    );
};

export default Menu;