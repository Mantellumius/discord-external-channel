import { StoreProvider } from '@app/providers/StoreProvider';
import { Channel } from '@pages/Channel';
import { Settings } from '@pages/Settings';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './app/Layout';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children:[
			{
				path: '/channel',
				element: <Channel />
			},
			{
				path: '/settings',
				element: <Settings />
			}
		]
	}
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<StoreProvider>
			<RouterProvider router={router}/>
		</StoreProvider>
	</React.StrictMode>
);
