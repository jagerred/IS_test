import { Button } from '@mui/material';
import gridIcon from 'src/assets/img/grid.svg';
import inlineIcon from 'src/assets/img/inline.svg';
import { useAppDispatch, useAppSelector } from 'src/redux/hooks';
import { toggleListMode } from 'src/redux/slices/global';

const ListModeSwitcher = () => {
	const { isGridList } = useAppSelector(state => state.global);
	const dispatch = useAppDispatch();

	const buttonIcon = isGridList ? gridIcon : inlineIcon;

	return (
		<Button variant='outlined' onClick={() => dispatch(toggleListMode())}>
			<img src={buttonIcon} alt='Mode Toggle Icon' />
		</Button>
	);
};

export default ListModeSwitcher;
