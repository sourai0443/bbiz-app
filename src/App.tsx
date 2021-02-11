import React, {useEffect, useState} from 'react';
import './App.css';
import Menu from "./component/menu/Menu";
import {Provider} from "react-redux";
import screenStore from "./store/ScreenStore";
import Main from "./component/main/Main";
import useStyles from "./AppCommon.css";
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import {ThemeProvider} from "@material-ui/core/styles";

const App: React.FC = () => {
    const classes = useStyles();
    const [mode, setMode] = useState(false);
    const [prefersDarkMode, setPrefersDarkMode] = useState(mode);

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
        setPrefersDarkMode(mode);
    }, [mode]);

    return (
        <Provider store={screenStore}>
            <ThemeProvider theme={theme}>
                <div className={`App  ${classes.root}`} >
                    <Menu changeTheme={(mode: boolean)=>{setMode(mode)}} isDarkTheme={mode}/>
                    <Main />
                </div>
            </ThemeProvider>
        </Provider>
    );
};

export default App;
