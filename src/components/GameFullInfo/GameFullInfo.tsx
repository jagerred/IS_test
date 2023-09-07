import { Button, CircularProgress } from '@mui/material';
import { useState } from 'react';
import { useAppSelector } from 'src/redux/hooks';
import { bindStyles } from 'src/utils/bindStyles';
import { getStringFromDate } from 'src/utils/getStringFromDate';

import styles from './GameFullInfo.module.scss';

const cx = bindStyles(styles);

const GameFullInfo = () => {
	const { game, isLoading } = useAppSelector(state => state.singleGame);
	const { description_raw, rating, name, released, background_image } = game;
	const fullReleaseDate = getStringFromDate(released);
	const [isFullDescription, setIsFullDescription] = useState(false);

	const finalDescription = isFullDescription
		? description_raw
		: `${description_raw.slice(0, 500)}...`;
	const buttonText = isFullDescription ? 'Скрыть' : 'Показать еще...';
	const toggleDescription = () => setIsFullDescription(!isFullDescription);

	if (isLoading)
		return (
			<div className={cx('loader')}>
				<CircularProgress color='inherit' />
			</div>
		);
	return (
		<div className={cx('container')}>
			<div className={cx('info')}>
				<div className={cx('photoWrapper')}>
					<img src={background_image} alt='' />
				</div>
				<h3 className={cx('title')}>{name}</h3>
				<span className={cx('text')}>{`Date: ${fullReleaseDate}`}</span>
				<span className={cx('text')}>{`Rating: ${rating}`}</span>
			</div>
			<p className={cx('description')}>{finalDescription}</p>
			{
				<Button className={cx('descriptionButton')} onClick={toggleDescription}>
					{buttonText}
				</Button>
			}
		</div>
	);
};

export default GameFullInfo;
