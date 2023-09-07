import { Pagination } from '@mui/material';
import { useAppDispatch, useAppSelector } from 'src/redux/hooks';
import {
	updateFilteredPagination,
	updatePagination,
} from 'src/redux/slices/games';

const GamesPagination = () => {
	const { totalPages, page, search } = useAppSelector(state => state.games);
	const { filtered } = useAppSelector(state => state.games);
	const dispatch = useAppDispatch();

	const onChange = (pageNumber: number) => {
		search
			? dispatch(updateFilteredPagination(pageNumber))
			: dispatch(updatePagination(pageNumber));
	};

	const isVisible = filtered.length > 0;

	if (isVisible)
		return (
			<Pagination
				page={page}
				count={totalPages}
				onChange={(_, num) => onChange(num)}
			/>
		);
};

export default GamesPagination;
