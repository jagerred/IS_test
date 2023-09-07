import { Game } from 'src/types/games';

export const filterByPage = (array: Game[], page: number, limit: number) => {
	const to = page === 1 ? limit : page * limit;
	return array.slice((page - 1) * limit, to);
};
