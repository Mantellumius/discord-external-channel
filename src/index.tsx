import { StoreProvider } from '@app/providers/StoreProvider';
import { Chat } from '@pages/Chat';
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
				path: '/chat',
				element: <Chat />
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
