import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from 'src/components/App/App.tsx';
import store from 'src/redux/store';

import './index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<Provider store={store}>
		<App />
	</Provider>
);
