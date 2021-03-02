import {combineReducers, configureStore} from "@reduxjs/toolkit";
import linkReducer from "./slice/LinkSlice";

const combinedAppDataReducer = combineReducers(
    linkReducer,
);

const AppDataStore = configureStore({reducer: combinedAppDataReducer});

export {combinedAppDataReducer};
export default AppDataStore;