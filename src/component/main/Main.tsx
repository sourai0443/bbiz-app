import React from "react";
import useStyles from "./MainCommon.css";
import {Container} from "@material-ui/core";
import {RootStateOrAny, useSelector} from "react-redux";
import LinkView from "../link/LinkView";

const Main: React.FC = (props) => {
    const classes = useStyles();
    const screen = useSelector((state: RootStateOrAny) => state.screenReducer);

    return (
        <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Container maxWidth="lg" className={classes.container}>
                {   screen.id === 4 &&
                    <LinkView />
                }
            </Container>
        </main>
    )
};

export default Main;
