import { TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import useDebounce from 'src/hooks/useDebounce';
import { useAppDispatch } from 'src/redux/hooks';
import { makeDefaultGames, updateSearch } from 'src/redux/slices/games';
import { bindStyles } from 'src/utils/bindStyles';

import ListModeSwitcher from '../ListModeSwitcher/ListModeSwitcher';

import styles from './Search.module.scss';

const cx = bindStyles(styles);

const Search = () => {
	const [searchValue, setSearchValue] = useState('');
	const debouncedValue = useDebounce(searchValue, 500);
	const dispatch = useAppDispatch();
	useEffect(() => {
		debouncedValue === ''
			? dispatch(makeDefaultGames())
			: dispatch(updateSearch(debouncedValue));
	}, [dispatch, debouncedValue]);

	return (
		<section className={cx('container')}>
			<TextField
				value={searchValue}
				onChange={e => setSearchValue(e.target.value)}
				fullWidth
				placeholder='Search...'
			/>
			<ListModeSwitcher />
		</section>
	);
};

export default Search;
