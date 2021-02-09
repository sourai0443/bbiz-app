import React from 'react';
import './App.css';
import Menu from "./component/common/Menu";
import {Provider} from "react-redux";
import screenStore from "./store/ScreenStore";

const App: React.FC = () => {
  return (
      <Provider store={screenStore}>
        <div className="App">
          <Menu />
        </div>
      </Provider>
  );
};

export default App;
