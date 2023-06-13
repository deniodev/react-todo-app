import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    categories: [],
    status: '',
};

const categoriesSlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        checkStatus: (state) => {
            state.status = 'Building';
        },
    },
});

export const { checkStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;