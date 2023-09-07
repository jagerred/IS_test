import axios from 'axios';
import { GameFull } from 'src/types/games';

import { apiOptions } from './apiOptions';

export const getGame = async (id: number): Promise<GameFull> => {
	const { data } = await axios(
		`games/${id}?key=${import.meta.env.VITE_API_KEY}`,
		apiOptions
	);

	return data;
};
