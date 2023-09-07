import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import GamePage from 'src/pages/GamePage/GamePage';
import MainPage from 'src/pages/MainPage/MainPage';
import NotFound from 'src/pages/NotFound/NotFound';

import 'src/utils/axios';

import Header from '../Header/Header';

import './App.scss';

const router = createBrowserRouter([
	{
		path: '/',
		element: <MainPage />,
	},
	{
		path: '/game/:id',
		element: <GamePage />,
	},
	{
		path: '*',
		element: <NotFound />,
	},
]);

const App = () => (
	<div className='wrapper'>
		<Header />
		<main className='main'>
			<RouterProvider router={router} />
		</main>
	</div>
);

export default App;
