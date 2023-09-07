import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import GameFullInfo from 'src/components/GameFullInfo/GameFullInfo';
import { useAppDispatch } from 'src/redux/hooks';
import { getSingleGame } from 'src/redux/slices/singleGame';
import { bindStyles } from 'src/utils/bindStyles';

import styles from './GamePage.module.scss';

const cx = bindStyles(styles);

const GamePage = () => {
	const { id } = useParams();
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (id && typeof id === 'string') dispatch(getSingleGame(Number(id)));
	}, [dispatch, id]);

	return (
		<section className={cx('container')}>
			<GameFullInfo />
		</section>
	);
};

export default GamePage;
