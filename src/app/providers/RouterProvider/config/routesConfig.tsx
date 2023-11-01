import Layout from "@app/Layout";
import { Channel } from "@pages/Channel";
import { Settings } from "@pages/Settings";
import { RouteObject } from "react-router-dom";

export type AppRoutes = 'channel' | 'settings';

export const RoutePath: Record<AppRoutes, string> = {
	'channel': '/channel',
	'settings': '/settings',
};

export const routeConfig: RouteObject[] = [
	{
		path: '/',
		element: <Layout />,
		children: [
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
];