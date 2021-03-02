import React from 'react';
import './App.css';
import Menu from "./component/menu/Menu";
import {Provider} from "react-redux";
import Main from "./component/main/Main";
import useStyles from "./AppCommon.css";
import {PersistGate} from "redux-persist/integration/react";
import store ,{persistor} from "./store/ConfigureStore";
import ThemeWrapper from "./component/themeWrapper/ThemeWrapper";
import LinkView from "./component/link/LinkView";

const App: React.FC = () => {
    const classes = useStyles();

    return (
        <Provider store={store}>
            <PersistGate loading={false} persistor={persistor} >
                <ThemeWrapper>
                    <div className={`App  ${classes.root}`} >
                        <Menu />
                        <Main>
                            {
                                <LinkView />
                            }
                        </Main>
                    </div>
                </ThemeWrapper>
            </PersistGate>
        </Provider>
    );
};

export default App;
