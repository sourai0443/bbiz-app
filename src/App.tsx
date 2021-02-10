import React from 'react';
import './App.css';
import Menu from "./component/menu/Menu";
import {Provider} from "react-redux";
import screenStore from "./store/ScreenStore";
import Main from "./component/main/Main";

const App: React.FC = () => {
    return (
        <Provider store={screenStore}>
            <div className="App">
                <Menu />
                <Main />
            </div>
        </Provider>
    );
};

export default App;
