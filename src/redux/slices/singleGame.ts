import { createAsyncThunk,createSlice } from '@reduxjs/toolkit';
import { GameFull } from 'src/types/games';
import { getGame } from 'src/utils/api/getGame';

type GamesState = {
	game: GameFull;
	isLoading: boolean;
};

const initialState: GamesState = {
	game: {
		id: 0,
		slug: '',
		name: '',
		released: '',
		tba: true,
		background_image: '',
		rating: 0,
		rating_top: 0,
		ratings: {},
		ratings_count: 0,
		reviews_text_count: '',
		added: 0,
		added_by_status: {},
		metacritic: 0,
		playtime: 0,
		suggestions_count: 0,
		updated: '',
		esrb_rating: {
			id: 0,
			slug: '',
			name: '',
		},
		platforms: [],
		description_raw: '',
	},
	isLoading: false,
};

export const getSingleGame = createAsyncThunk<
	GameFull,
	number,
	{ rejectValue: string }
>('singleGame/getGames', async (id, { rejectWithValue }) => {
	try {
		const result = await getGame(id);
		return result;
	} catch (error) {
		return rejectWithValue('Error');
	}
});

const singleGameSlice = createSlice({
	name: 'singleGame',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(getSingleGame.pending, state => {
				state.isLoading = true;
			})
			.addCase(getSingleGame.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.game = payload;
			})
			.addCase(getSingleGame.rejected, (_, action) => {
				console.log(action.payload);
			});
	},
});

export default singleGameSlice.reducer;
