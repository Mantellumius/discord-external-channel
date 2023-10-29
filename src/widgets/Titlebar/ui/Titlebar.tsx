import chatIcon from '@assets/icons/chat.svg';
import closeIcon from '@assets/icons/close.svg';
import pinIcon from '@assets/icons/pin.svg';
import pinnedIcon from '@assets/icons/pinned.svg';
import settingsIcon from '@assets/icons/settings.svg';
import classNames from '@shared/lib/classNames/classNames';
import { Button } from '@shared/ui';
import { appWindow } from '@tauri-apps/api/window';
import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import cls from './Titlebar.module.scss';
import { WindowTitle } from './WindowTitle';

export const Titlebar: FC<Props> = ({ className }) => {
	const [alwaysOnTop, setAlwaysOnTop] = useState(false);
	const navigate = useNavigate();
	
	const handleClose = () => {
		appWindow.close();
	};
	const pin = () => {
		setAlwaysOnTop(prev => {
			appWindow.setAlwaysOnTop(!prev);
			return !prev;
		});
	};
	return (
		<div data-tauri-drag-region className={classNames(cls.root, {}, [className])}>
			<WindowTitle />
			<div className={cls.root__buttons}>
				<Button className={cls.root__button} onClick={pin}>
					{alwaysOnTop ? 
						<img width={16} height={16} src={pinnedIcon}/> :
						<img width={16} height={16} src={pinIcon}/>  
					}
				</Button>
				<Button className={cls.root__button} onClick={() => navigate('/settings')}>
					<img width={16} height={16} src={settingsIcon}/>
				</Button>
				<Button className={cls.root__button} onClick={() => navigate('chat')}>
					<img width={16} height={16} src={chatIcon}/>
				</Button>
				<Button className={classNames(cls.root__button, {}, [cls.root__close])} onClick={handleClose}>
					<img width={16} height={16} src={closeIcon}/>
				</Button>
			</div>
		</div>
	);
};

interface Props {
	className?: string
}
