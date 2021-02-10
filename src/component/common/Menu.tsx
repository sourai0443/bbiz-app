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
import SettingsIcon from '@material-ui/icons/Settings';
import {PrimaryMenuList} from "./MenuList";
import HomeIcon from '@material-ui/icons/Home';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import ListAltIcon from '@material-ui/icons/ListAlt';
import LinkIcon from '@material-ui/icons/Link';
import {MenuList} from "./DataList";
import {RootStateOrAny, useSelector} from "react-redux";
import useStyles from "./MenuCommonStyle";

// アイコンのリスト
const iconList: ReactNode[] = [
    <HomeIcon/>,
    <ListAltIcon/>,
    <ContactSupportIcon/>,
    <LinkIcon/>
];

// イベントハンドラ仮置き
const menuList: MenuList[] = [
    new MenuList(1, "Home", () => {console.log("Home")},0),
    new MenuList(2, "Task", () => {console.log("Task")},0),
    new MenuList(3, "Question", () => {console.log("Question")},0),
    new MenuList(4, "Link", () => {console.log("Link")},0)
];


const Menu: React.FC = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const screen = useSelector((state: RootStateOrAny) => state.screen.name);

    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };
    // const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
                <Toolbar className={classes.toolbar}>
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
                        { screen }
                    </Typography>
                    <IconButton color="inherit">
                        <Badge badgeContent={0} color="secondary">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                    <IconButton color="inherit">
                        <Badge badgeContent={0} color="secondary">
                            <SettingsIcon />
                        </Badge>
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
                <List>
                    <PrimaryMenuList iconList={iconList} menuList={menuList} />
                </List>
                <Divider />
                <List>
                </List>
            </Drawer>
        </div>
    );
};

export default Menu;