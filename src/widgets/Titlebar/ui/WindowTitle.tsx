import { selectChannelId } from '@entities/Chat';
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
	const [channel, setChannel] = useState<Channel>();
	useEffect(() => {
		if (!token || !channelId) return;
		axios.get<Channel>(`${DISCORD_API}/channels/${channelId}`, {
			headers: {
				'Authorization': token
			}
		}).then(res => setChannel(res.data));
	}, [channelId, dispatch, token]);
	useEffect(() => {

	},[channelId]);

	return (
		<div className={cls.root__logo}>
			<span>Chat {channel?.name}</span>
		</div>
	);
};
