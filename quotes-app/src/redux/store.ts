import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Quote {
    author: string;
    id: number;
    quote: string;
}

const initialState: Quote[] = [] ;

const BookmarkSlice = createSlice({
    name: "bookmark",
    initialState: {bookmarks:initialState},

    reducers: {
        bookmarkQuote: (state, action: PayloadAction<Quote>) => {

            const existingBookmark = state.bookmarks.find(quote => quote.id === action.payload.id);
            if (!existingBookmark) {
                state.bookmarks.push(action.payload);
            }
        },

        removeFromBookmark: (state, action: PayloadAction<number>) => {

            state.bookmarks = state.bookmarks.filter(quote => quote.id !== action.payload);
        }
    },
});

const store = configureStore({
    reducer: BookmarkSlice.reducer,
});

export const { bookmarkQuote, removeFromBookmark } = BookmarkSlice.actions;

export default store;
