import { selectChannelId } from '@entities/Channel';
import { selectToken } from '@entities/User';
import { $discordApi } from '@shared/lib/api/discord';
import { Channel } from '@shared/types/Channel';
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
		$discordApi.get<Channel>(`/channels/${channelId}`)
			.then(res => setChannelName(res.data.name))
			.catch(() => setChannelName(''));
	}, [channelId, dispatch, token]);

	return (
		<div className={cls.root__title}>
			<span>{channelName}</span>
		</div>
	);
};
