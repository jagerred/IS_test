import { CircularProgress } from '@mui/material';
import { useAppSelector } from 'src/redux/hooks';
import { bindStyles } from 'src/utils/bindStyles';

import GameItem from '../GameItem/GameItem';

import styles from './GameList.module.scss';

const cx = bindStyles(styles);

const GameList = () => {
	const { filtered, isLoading } = useAppSelector(state => state.games);
	const { isGridList } = useAppSelector(state => state.global);

	const gamesList = filtered.map(
		({ name, background_image, rating, released, id }) => (
			<GameItem
				key={id}
				id={id}
				name={name}
				poster={background_image}
				rating={rating}
				release={released}
				isGridList={isGridList}
			/>
		)
	);

	if (isLoading)
		return (
			<div className={cx('loader')}>
				<CircularProgress color='inherit' />
			</div>
		);

	return (
		<ul
			className={cx('container', {
				list: !isGridList,
			})}
		>
			{filtered.length > 0 ? (
				gamesList
			) : (
				<h2 className={cx('message')}>Nothing was found...</h2>
			)}
		</ul>
	);
};

export default GameList;
