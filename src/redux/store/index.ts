import { configureStore } from '@reduxjs/toolkit';
import gamesReducer from 'src/redux/slices/games';
import globalReducer from 'src/redux/slices/global';
import singleGameReducer from 'src/redux/slices/singleGame';

const store = configureStore({
	reducer: {
		games: gamesReducer,
		singleGame: singleGameReducer,
		global: globalReducer,
	},
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
