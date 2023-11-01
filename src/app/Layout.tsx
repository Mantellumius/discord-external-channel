import { channelActions } from '@entities/Channel';
import { selectBackgroundColorWithTransperancy, settingsActions } from '@entities/Settings';
import { userActions } from '@entities/User';
import { appWindow } from '@tauri-apps/api/window';
import { Titlebar } from '@widgets/Titlebar';
import { UnlistenFn } from 'node_modules/@tauri-apps/api/event';
import { CSSProperties, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import cls from './Layout.module.scss';
import './styles/index.scss';

const Layout = () => { 
	const [isFocused, setIsFocused] = useState(true);
	const backgroundColor = useSelector(selectBackgroundColorWithTransperancy);
	const dispatch = useDispatch();

	useEffect(() => {
		const unlistens: Promise<UnlistenFn>[] = [];
		(async () => {
			dispatch(userActions.initAuthData());
			dispatch(channelActions.initChannel());
			dispatch(settingsActions.init());
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
		})();
		return () => {
			Promise.all(unlistens)
				.then(fns => fns.forEach(fn => fn()));
		};
	},[dispatch]);
	return (
		<div className={cls.root}
			style={{'--background-color': backgroundColor, 
				'--titlebar-height': isFocused ? '24px' : 0} as CSSProperties}
		>
			<Titlebar />
			<Outlet />
		</div>
	);
};

export default Layout;
