import { Message as MessageType } from '@entities/Chat/model/types/Message';
import classNames from '@shared/lib/classNames/classNames';
import { Image } from '@shared/ui/Image/Image';
import { FC } from 'react';
import cls from './Message.module.scss';
import { MessageContent } from './MessageContent';
import { useSelector } from 'react-redux';
import { selectSettings } from '@entities/Settings';

export const Message: FC<Props> = ({ className, message }) => {
	const settings = useSelector(selectSettings);
	return (
		<div className={classNames(cls.root, {}, [className])}>
			{settings.displayAuthorAvatar && <Image variant='rounded'
				width={48}
				height={48}
				src={`https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}.png`}
			/>}
			<div className={cls.root__text}>
				<span className={cls.root__text__name}>{message.author.global_name}</span>
				<MessageContent 
					content={message.content} 
					attachments={message.attachments}
					embeds={message.embeds}
				/>
			</div>
		</div>
	);
};

interface Props {
	className?: string,
	message: MessageType
}
