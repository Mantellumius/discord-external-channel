import { RouterProvider as ReactRouterProvider, createBrowserRouter } from 'react-router-dom';
import { routeConfig } from '../config/routesConfig';

const router = createBrowserRouter(routeConfig);

export const RouterProvider = () => {
	return <ReactRouterProvider router={router} />;
};




