import { chatActions } from '@entities/Chat';
import { selectSettings, settingsActions } from '@entities/Settings';
import { userActions } from '@entities/User';
import { CHANNEL_ID, DISCORD_TOKEN } from '@shared/consts/localStorage';
import classNames from '@shared/lib/classNames/classNames';
import { Button, Input } from '@shared/ui';
import { Range } from '@shared/ui/Range/Range';
import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cls from './Settings.module.scss';

export const Settings: FC<Props> = ({ className }) => {
	const [token, setToken] = useState('');
	const [channelId, setChannelId] = useState('');
	const settings = useSelector(selectSettings);
	const dispatch = useDispatch();
	const onSave = () => {
		dispatch(userActions.setToken(token));
		dispatch(chatActions.setChannelId(channelId));
	};
	useEffect(() => {
		setToken(localStorage.getItem(DISCORD_TOKEN) ?? '');
		setChannelId(localStorage.getItem(CHANNEL_ID) ?? '');
	}, []);
	return (
		<div className={classNames(cls.root, {}, [className])}
		>
			<Input type='password' 
				value={token}
				onChange={setToken} 
				placeholder='Token'
			/>
			<Input value={channelId}
				onChange={setChannelId} 
				placeholder='Channel id'/>
			<Button onClick={onSave}>
				Save
			</Button>
			<Range value={settings.transperancy} 
				onChange={value => dispatch(settingsActions.setTransperancy(value))} 
				min={0} max={255} step={17}/>
			<Input type='color' 
				value={settings.backgroundColor}
				onChange={value => dispatch(settingsActions.setColor(value))}
			/>
		</div>
	);
};

interface Props {
	className?: string
}
