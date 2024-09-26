import { configureStore } from "@reduxjs/toolkit";
import { BookmarkSlice } from "./bookmarkSlice";


const store = configureStore({
    reducer: BookmarkSlice.reducer,
});

export const { bookmarkQuote, removeFromBookmark } = BookmarkSlice.actions;

export default store;
