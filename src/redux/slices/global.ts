import { createSlice } from '@reduxjs/toolkit';

type GlobalState = {
	isGridList: boolean;
};

const initialState: GlobalState = {
	isGridList: true,
};

const globalSlice = createSlice({
	name: 'global',
	initialState,
	reducers: {
		toggleListMode(state) {
			state.isGridList = !state.isGridList;
		},
	},
});

export const { toggleListMode } = globalSlice.actions;

export default globalSlice.reducer;
