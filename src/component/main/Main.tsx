import React from "react";
import useStyles from "./MainCommon.css";
import {RootStateOrAny, useSelector} from "react-redux";

const Main: React.FC = () => {
    const classes = useStyles();
    const screen = useSelector((state: RootStateOrAny) => state.screen);

    return (
        <main className={classes.content}>
        </main>
    )
};

export default Main;
