// 参考: https://zenn.dev/nus3/articles/c2d86097029c12285680
import {combineReducers} from 'redux'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import {FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE} from "redux-persist/es/constants";
import screenReducer from "./slice/ScreenSlice";
import displayModeReducer from "./slice/DisplayModeSlice";

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