import { useEffect } from 'react';
import GameList from 'src/components/GameList/GameList';
import GamesPagination from 'src/components/GamesPagination/GamesPagination';
import Search from 'src/components/Search/Search';
import { useAppDispatch } from 'src/redux/hooks';
import { getGamesList } from 'src/redux/slices/games';
import { bindStyles } from 'src/utils/bindStyles';

import styles from './MainPage.module.scss';

const cx = bindStyles(styles);

const MainPage = () => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getGamesList());
	}, [dispatch]);

	return (
		<section className={cx('container')}>
			<Search />
			<GameList />
			<GamesPagination />
		</section>
	);
};

export default MainPage;
