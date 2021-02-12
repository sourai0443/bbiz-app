import {combineReducers, compose} from 'redux'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import {combinedScreenReducer} from './ScreenStore';
import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import {FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE} from "redux-persist/es/constants";
import {combinedDisplayModeReducer} from "./DisplayModeStore";
import screenReducer from "./slice/ScreenSlice";
import displayModeReducer from "./slice/DisplayModeSlice";

/**
 * redux-dev-toolsをTSで使うための記載
 * https://qiita.com/AshSuzuki/items/111d5a7c5d30fd1123c3
 */
interface ExtendedWindow extends Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
}
declare var window: ExtendedWindow;
// const composeReduxDevToolsEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// 永続化の設定
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ["screenReducer", "displayModeReducer"],
    // blacklist: [''], // 永続化しないState名を指定
};

const combinedReducer = combineReducers({
    screenReducer,
    displayModeReducer,
});

// 永続化設定されたReducerとして定義
const persistedReducer = persistReducer(persistConfig, combinedReducer);

// 永続化設定済みのReducerとミドルウェアからStoreを作成
const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }
    })
});

// <PersistGate loading={false} persistor={persistor}>...</PersistGate>
export const persistor = persistStore(store);

// <Provider store={store}>...</Provider>
export default store;