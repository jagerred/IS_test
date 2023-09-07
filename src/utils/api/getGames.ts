import axios from 'axios';
import { Game } from 'src/types/games';

import { apiOptions } from './apiOptions';

export const getGames = async (): Promise<Game[]> => {
	const { data } = await axios(
		`games?key=${import.meta.env.VITE_API_KEY}`,
		apiOptions
	);
	return data.results;
};
