import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Game } from 'src/types/games';
import { getGames } from 'src/utils/api/getGames';
import { checkAnyMatch } from 'src/utils/checkAnyMatch';
import { filterByPage } from 'src/utils/filterByPage';

type GamesState = {
	games: Game[];
	filtered: Game[];
	isLoading: boolean;
	page: number;
	totalPages: number;
	pageLimit: number;
	search: string;
};

const initialState: GamesState = {
	games: [],
	filtered: [],
	isLoading: false,
	page: 1,
	totalPages: 1,
	pageLimit: 6,
	search: '',
};
export const getGamesList = createAsyncThunk<
	Game[],
	undefined,
	{ rejectValue: string }
>('games/getGames', async (_, { rejectWithValue }) => {
	try {
		const result = await getGames();
		return result;
	} catch (error) {
		return rejectWithValue('Error');
	}
});

const gamesSlice = createSlice({
	name: 'games',
	initialState,
	reducers: {
		updateSearch(state, action: PayloadAction<string>) {
			state.search = action.payload;
			const filtered = state.games.filter(game =>
				checkAnyMatch(game, action.payload)
			);
			state.filtered = filterByPage(filtered, 1, state.pageLimit);
			state.page = 1;
			state.totalPages = Math.ceil(filtered.length / state.pageLimit);
		},

		makeDefaultGames(state) {
			state.page = 1;
			state.filtered = filterByPage(state.games, 1, state.pageLimit);
			state.totalPages = Math.ceil(state.games.length / state.pageLimit);
			state.search = '';
		},

		updatePagination(state, action: PayloadAction<number>) {
			state.filtered = filterByPage(
				state.games,
				action.payload,
				state.pageLimit
			);
			state.page = action.payload;
		},

		updateFilteredPagination(state, action: PayloadAction<number>) {
			const filtered = state.games.filter(game =>
				checkAnyMatch(game, action.payload)
			);
			state.filtered = filterByPage(filtered, action.payload, state.pageLimit);
			state.page = action.payload;
		},
	},
	extraReducers: builder => {
		builder
			.addCase(getGamesList.pending, state => {
				state.isLoading = true;
			})
			.addCase(getGamesList.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.games = payload;
				state.totalPages = Math.ceil(payload.length / state.pageLimit);
				state.filtered = filterByPage(payload, 1, state.pageLimit);
			})
			.addCase(getGamesList.rejected, (_, action) => {
				console.log(action.payload);
			});
	},
});

export const {
	updatePagination,
	updateSearch,
	makeDefaultGames,
	updateFilteredPagination,
} = gamesSlice.actions;

export default gamesSlice.reducer;
