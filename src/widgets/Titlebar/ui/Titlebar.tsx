import CloseIcon from '@assets/icons/close.svg?react';
import HideIcon from '@assets/icons/hide.svg?react';
import PinIcon from '@assets/icons/pin.svg?react';
import PinnedIcon from '@assets/icons/pinned.svg?react';
import SettingsIcon from '@assets/icons/settings.svg?react';
import { selectSettings } from '@entities/Settings';
import classNames from '@shared/lib/classNames/classNames';
import { Button } from '@shared/ui';
import { appWindow } from '@tauri-apps/api/window';
import { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import cls from './Titlebar.module.scss';
import { WindowTitle } from './WindowTitle';

export const Titlebar: FC<Props> = ({ className }) => {
	const [alwaysOnTop, setAlwaysOnTop] = useState(false);
	const navigate = useNavigate();
	const settings = useSelector(selectSettings);	
	const pin = () => {
		setAlwaysOnTop(prev => {
			appWindow.setAlwaysOnTop(!prev);
			return !prev;
		});
	};
	const onClickSettings = () => {
		const {pathname} = window.location;
		if (pathname === '/settings') {
			navigate('/channel');
		} else {
			navigate('/settings');
		}
	};

	return (
		<div data-tauri-drag-region className={classNames(cls.root, {}, [className])}>
			<Button className={cls.root__button}
				onClick={onClickSettings}>
				<SettingsIcon width={16} height={16} />
			</Button>
			<WindowTitle />
			<div className={cls.root__buttons}>
				<Button className={cls.root__button} onClick={pin}>
					{alwaysOnTop ? 
						<PinnedIcon width={16} height={16} /> :
						<PinIcon width={16} height={16}/>  
					}
				</Button>
				<Button className={cls.root__button}
					onClick={() => settings.minimizeToTray ? appWindow.hide() : appWindow.minimize()}
				>
					<HideIcon width={24} height={24} />
				</Button>
				<Button className={classNames(cls.root__button, {}, [cls.root__close])}
					onClick={() => appWindow.close()}>
					<CloseIcon width={16} height={16} />
				</Button>
			</div>
		</div>
	);
};

interface Props {
	className?: string
}
