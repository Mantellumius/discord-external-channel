import { RouterProvider } from '@app/providers/RouterProvider';
import { StoreProvider } from '@app/providers/StoreProvider';
import React from 'react';
import ReactDOM from 'react-dom/client';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<StoreProvider>
			<RouterProvider />
		</StoreProvider>
	</React.StrictMode>
);
