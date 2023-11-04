import { selectBackgroundColorWithTransperancy, selectSettings, settingsActions } from '@entities/Settings';
import { PhysicalSize, appWindow } from '@tauri-apps/api/window';
import { Titlebar } from '@widgets/Titlebar';
import { UnlistenFn } from 'node_modules/@tauri-apps/api/event';
import { CSSProperties, useLayoutEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import cls from './Layout.module.scss';
import './styles/index.scss';

const Layout = () => { 
	const [isFocused, setIsFocused] = useState(true);
	const dispatch = useDispatch();
	const settings = useSelector(selectSettings);
	const backgroundColor = useSelector(selectBackgroundColorWithTransperancy);
	
	useLayoutEffect(() => {
		const unlistens: Promise<UnlistenFn>[] = [];
		unlistens.push(appWindow.onResized(e => {
			dispatch(settingsActions.setSize({
				height:	e.payload.height,
				width:	e.payload.width
			}));
		}));
		unlistens.push(appWindow.onFocusChanged(async (e) => {
			setIsFocused(e.payload);
			appWindow.setResizable(e.payload);
		}));

		return () => {
			Promise.all(unlistens)
				.then(fns => fns.forEach(fn => fn()));
		};
	},[dispatch, settings.height, settings.width]);
	useLayoutEffect(() => {
		appWindow.setSize(new PhysicalSize(settings.width, settings.height));
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<div className={cls.root}
			style={{'--background-color': backgroundColor, 
				'--titlebar-height': (!isFocused && window.location.pathname !== '/settings') ? 0 : '24px'} as CSSProperties}
		>
			<Titlebar />
			<Outlet />
		</div>
	);
};

export default Layout;
