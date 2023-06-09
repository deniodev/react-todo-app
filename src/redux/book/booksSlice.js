import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    books: [],
};

const bookSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {
        addBook: (state, action) => {
            state.books.push(action.payload)
        },
        removeBook: (state, action) => {
            state.books.filter((item) => item.id === action.payload.id);
        },
    },
});
export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;