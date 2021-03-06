import {createSlice} from "@reduxjs/toolkit";
import LinkModel from "../../model/impl/LinkModel";

const initialState = {
    links: [
        new LinkModel(1, "detail1", "Title", new Date().toLocaleDateString(), new Date().toLocaleDateString(), "https://yahoo.co.jp", "URL"),
        new LinkModel(2, "detail2", "Title", new Date().toLocaleDateString(), new Date().toLocaleDateString(), "https://google.com", "URL"),
        new LinkModel(3, "detail3", "Title", new Date().toLocaleDateString(), new Date().toLocaleDateString(), "https://yahoo.co.jp", "URL"),
        new LinkModel(4, "detail4", "Title", new Date().toLocaleDateString(), new Date().toLocaleDateString(), "https://google.com", "URL"),
        new LinkModel(5, "detail5", "Title", new Date().toLocaleDateString(), new Date().toLocaleDateString(), "https://yahoo.co.jp", "URL"),
    ],
};

const slice = createSlice({
    name: "links",
    initialState: initialState,
    reducers: {
        setLinks: (state, action) => {
            return Object.assign({}, state, action.payload);
        },
    }
});

const linkReducer = slice.reducer;

export const {setLinks} = slice.actions;
export default linkReducer;