import React from "react";
import useStyles from "./MainCommon.css";
import {Container} from "@material-ui/core";

const Main: React.FC = (props) => {
    const classes = useStyles();

    return (
        <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Container maxWidth="lg" className={classes.container}>
                <>
                    {
                        props.children
                    }
                </>
            </Container>
        </main>
    )
};

export default Main;
