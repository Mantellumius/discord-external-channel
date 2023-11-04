import { selectChannelId } from '@entities/Channel';
import { selectToken } from '@entities/User';
import { DISCORD_API } from '@shared/consts/apis';
import { Channel } from '@shared/types/Channel';
import axios from 'axios';
import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cls from './Titlebar.module.scss';

export const WindowTitle: FC = () => {
	const dispatch = useDispatch();
	const channelId = useSelector(selectChannelId);
	const token = useSelector(selectToken);
	const [channelName, setChannelName] = useState('');
	useEffect(() => {
		if (!token || !channelId) return;
		axios.get<Channel>(`${DISCORD_API}/channels/${channelId}`, {
			headers: {
				'Authorization': token
			}})
			.then(res => setChannelName(res.data.name))
			.catch(() => setChannelName(''));
	}, [channelId, dispatch, token]);

	return (
		<div className={cls.root__logo}>
			<span>Channel - {channelName}</span>
		</div>
	);
};
