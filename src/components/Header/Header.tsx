import { bindStyles } from 'src/utils/bindStyles';

import styles from './Header.module.scss';

const cx = bindStyles(styles);

const Header = () => {
	return (
		<header className={cx('container')}>
			<h2 className={cx('title')}>Games Search</h2>
		</header>
	);
};

export default Header;
