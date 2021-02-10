import React from 'react';
import './App.css';
import Menu from "./component/menu/Menu";
import {Provider} from "react-redux";
import screenStore from "./store/ScreenStore";
import useStyles from "./AppCommon.css";

const App: React.FC = () => {
    const classes = useStyles();

    return (
        <Provider store={screenStore}>
            <div className="App">
                <Menu />
                <main className={classes.content}>
                </main>
            </div>
        </Provider>
    );
};

export default App;
