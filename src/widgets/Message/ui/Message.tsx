import { APIMessage } from 'discord-api-types/v10';
import classNames from '@shared/lib/classNames/classNames';
import { Image } from '@shared/ui/Image/Image';
import { FC } from 'react';
import cls from './Message.module.scss';
import { MessageContent } from './MessageContent';
import { useSelector } from 'react-redux';
import { selectSettings } from '@entities/Settings';

const avatarSize = 48;
export const Message: FC<Props> = ({ className, message, compact = false }) => {
	const settings = useSelector(selectSettings);
	return (
		<div className={classNames(cls.root, {}, [className])}>
			{settings.displayAuthorAvatar && !compact && <Image variant='rounded'
				className={cls.root__avatar}
				width={avatarSize}
				height={avatarSize}
				src={`https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}.png`}
			/>}
			<div className={cls.root__text} style={{paddingLeft: compact ? avatarSize + 16 : 0}}>
				{!compact && <span className={cls.root__text__name}>{message.author.global_name}</span>}
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
	message: APIMessage,
	compact?: boolean
}
