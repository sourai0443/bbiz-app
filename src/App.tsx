import React, {useEffect, useState} from 'react';
import './App.css';
import Menu from "./component/menu/Menu";
import {Provider} from "react-redux";
import Main from "./component/main/Main";
import useStyles from "./AppCommon.css";
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import {ThemeProvider} from "@material-ui/core/styles";
import {PersistGate} from "redux-persist/integration/react";
import store ,{persistor} from "./store/ConfigureStore";

const App: React.FC = () => {
    const classes = useStyles();

    // TODO: ダークモード初期表示時に、一度白いメニューバーが表示されてしまう。
    // const initDisplayModeString: string = "{'displayModeReducer':{'isDarkMode':false,'isOpen':false}";
    // let initDarkMode: boolean = false;
    // const localDisplayMode = localStorage.getItem("persist:root") !== null ? localStorage.getItem("persist:root") : initDisplayModeString;
    // if (typeof localDisplayMode === "string") initDarkMode = JSON.parse(localDisplayMode).isDarkMode;
    const [prefersDarkMode, setPrefersDarkMode] = useState(false);


    // TODO: テーマの切り替え方法をRTKを用いたものにするか要検討。規模が小さいため、Stateの受け渡しでもいい気がする。
    // const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const theme = React.useMemo(() =>
            createMuiTheme({
                palette: {
                    type: prefersDarkMode ? 'dark' : 'light',
                },
            }),
        [prefersDarkMode],
    );

    useEffect(()=>{
        setPrefersDarkMode(prefersDarkMode);
    }, [prefersDarkMode]);

    return (
        <Provider store={store}>
            <PersistGate loading={false} persistor={persistor} >
                <ThemeProvider theme={theme}>
                    <div className={`App  ${classes.root}`} >
                        <Menu changeTheme={(mode: boolean)=>{setPrefersDarkMode(mode)}}/>
                        <Main />
                    </div>
                </ThemeProvider>
            </PersistGate>
        </Provider>
    );
};

export default App;
