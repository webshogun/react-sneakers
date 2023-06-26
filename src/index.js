import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './app';
import Error from './error';
import Home from './routes/home';
import Favorites from './routes/favorites';
import Orders from './routes/orders';

const router = createBrowserRouter([
	{
		path: '',
		element: <App />,
		errorElement: <Error />,
		children: [
			{
				path: '',
				element: <Home />,
				exact: true,
			},
			{
				path: 'favorites',
				element: <Favorites />,
				exact: true,
			},
			{
				path: 'orders',
				element: <Orders />,
				exact: true,
			},
		],
	},
]);

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
