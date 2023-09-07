import { Link } from 'react-router-dom';
import { bindStyles } from 'src/utils/bindStyles';
import { getStringFromDate } from 'src/utils/getStringFromDate';

import styles from './GameItem.module.scss';

const cx = bindStyles(styles);

interface Props {
	id: number;
	name: string;
	poster: string;
	release: string;
	rating: number;
	isGridList: boolean;
}

const GameItem: React.FC<Props> = ({
	id,
	poster,
	rating,
	name,
	release,
	isGridList,
}: Props) => {
	const fullReleaseDate = getStringFromDate(release);
	const finalName =
		isGridList && name.length > 30 ? `${name.slice(0, 30)}...` : name;
	return (
		<li
			className={cx('container', {
				['container_full']: !isGridList,
			})}
		>
			<div
				className={cx('photoWrapper', {
					['photoWrapper_full']: !isGridList,
				})}
			>
				<img src={poster} alt={`${name} poster`} />
			</div>
			<div
				className={cx('info', {
					['info_full']: !isGridList,
				})}
			>
				<h3 className={cx('title')}>{finalName}</h3>
				<span className={cx('year')}>{`Release date: ${fullReleaseDate}`}</span>
				<span className={cx('rating')}>{`Rating: ${rating}`}</span>
			</div>
			<Link className={cx('link')} to={`/game/${id}`} />
		</li>
	);
};

export default GameItem;
