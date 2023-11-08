import { channelActions, selectChannelId, selectMessages } from '@entities/Channel';
import { selectSettings } from '@entities/Settings';
import { selectToken } from '@entities/User';
import { $discord } from '@shared/lib/api/discord';
import classNames from '@shared/lib/classNames/classNames';
import { Message } from '@widgets/Message';
import { APIMessage } from 'discord-api-types/v10';
import { FC, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cls from './Messages.module.scss';

export const Messages: FC<Props> = ({ className }) => {
	const dispatch = useDispatch();
	const settings = useSelector(selectSettings);
	const messages = useSelector(selectMessages);
	const channelId = useSelector(selectChannelId);
	const token = useSelector(selectToken);
	const listRef = useRef<HTMLLIElement | null>(null);
	const messagesRef = useRef<APIMessage[]>([]);
	useEffect(() => {
		const fetchMessages = async () => {
			if (!token || !channelId) return;
			const response = await $discord.get<APIMessage[]>(`/channels/${channelId}/messages?limit=${settings.messagesAmount}`);
			dispatch(channelActions.setMessages(response.data.reverse()));
		};
		fetchMessages();
		const interval = setInterval(fetchMessages, settings.fetchInterval);
		return () => clearInterval(interval);
	}, [channelId, dispatch, token, settings]);
	useEffect(() => {
		if (messages.at(-1)?.id !== messagesRef.current.at(-1)?.id) {
			listRef.current?.scrollTo(0, listRef.current.scrollHeight);
		}
		messagesRef.current = messages;
	}, [messages]);

	return (
		<li className={classNames(cls.root, {}, [className])} 
			ref={listRef}
		>
			{messages.map((message, i) => (
				<Message key={message.id} 
					message={message} 
					compact={messages[i - 1]?.author.id === message.author.id}
				/>
			))}
		</li>
	);
};

interface Props {
	className?: string,
}
