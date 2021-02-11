import React, {ReactNode, useState} from 'react';
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
import {PrimaryMenuList} from "./MenuList";
import HomeIcon from '@material-ui/icons/Home';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import ListAltIcon from '@material-ui/icons/ListAlt';
import LinkIcon from '@material-ui/icons/Link';
import {MenuList} from "./DataList";
import {RootStateOrAny, useSelector} from "react-redux";
import useStyles from "./MenuCommon.css";
import {ListSubheader} from "@material-ui/core";
import BrightnessHighIcon from '@material-ui/icons/BrightnessHigh';
import BrightnessLowIcon from '@material-ui/icons/BrightnessLow';
import MouseOverPopover from "../common/mouseOverPopup";

// アイコンのリスト
const iconList: ReactNode[] = [
    <HomeIcon/>,
    <ListAltIcon/>,
    <ContactSupportIcon/>,
    <LinkIcon/>
];

// イベントハンドラ仮置き
const menuList: MenuList[] = [
    new MenuList(1, "Home", false,() => {console.log("Home")}, 0),
    new MenuList(2, "Task", false, () => {console.log("Task")},5),
    new MenuList(3, "Question", false, () => {console.log("Question")},10),
    new MenuList(4, "Link", false, () => {console.log("Link")},100)
];

let prevScreenId: number;

const Menu: React.FC<{changeTheme: (mode: boolean) => void, isDarkTheme: boolean}> = (props) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const screen = useSelector((state: RootStateOrAny) => state.screen);
    const currentScreen = menuList[screen.id - 1];

    menuList[screen.id - 1].setSelected(true);
    if (prevScreenId !== undefined && prevScreenId !== screen.id) {
        menuList[prevScreenId - 1].setSelected(false);
    }
    prevScreenId = screen.id;

    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };
    const toggleTheme = () => {
        props.changeTheme(!props.isDarkTheme)
    };

    return (
        <>
            <CssBaseline />
            <AppBar position="absolute" color={props.isDarkTheme ? "inherit" : "primary"} className={clsx(classes.appBar, open && classes.appBarShift)}>
                <Toolbar className={classes.toolbar} >
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
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
                            `Toggle to ${props.isDarkTheme ? "light" : "dark "} theme.`
                        }>
                            <Badge color="secondary">
                                {   props.isDarkTheme ?
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
                    paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                }}
                open={open}
            >
                <div className={classes.toolbarIcon}>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon />
                    </IconButton>
                </div>
                <Divider />
                <List >
                    <ListSubheader hidden={!open}>Main Apps</ListSubheader>
                    <PrimaryMenuList iconList={iconList} menuList={menuList} />
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