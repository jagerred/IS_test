import { Game } from 'src/types/games';

export const checkAnyMatch = (obj: Game, filter: string | number) => {
	const values = Object.values(obj)
		.flat()
		.filter(value => typeof value !== 'object' && typeof value !== 'boolean');

	const stringFilter = filter.toString().toLowerCase();

	for (let i = 0; i <= values.length - 1; i++) {
		if (values[i].toString().toLowerCase().includes(stringFilter)) {
			return true;
		}
	}
};
