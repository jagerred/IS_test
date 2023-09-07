import { bindStyles } from 'src/utils/bindStyles';

import styles from './NotFound.module.scss';

const cx = bindStyles(styles);

const NotFound = () => {
	return (
		<section className={cx('container')}>
			<h2 className={cx('title')}>404. Not Found</h2>
		</section>
	);
};

export default NotFound;
