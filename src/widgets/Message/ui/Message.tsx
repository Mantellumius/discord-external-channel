import { selectSettings } from '@entities/Settings';
import { selectTextColorWithTransperancy } from '@entities/Settings/model/selectors/selectTextColorWithTransperancy';
import classNames from '@shared/lib/classNames/classNames';
import { Image } from '@shared/ui/Image/Image';
import { APIMessage } from 'discord-api-types/v10';
import { CSSProperties, FC } from 'react';
import { useSelector } from 'react-redux';
import cls from './Message.module.scss';
import { MessageContent } from './MessageContent/MessageContent';

const avatarSize = 48;
export const Message: FC<Props> = ({ className, message, compact = false }) => {
	const settings = useSelector(selectSettings);
	const textColor = useSelector(selectTextColorWithTransperancy);
	
	return (
		<div className={classNames(cls.root, {}, [className])}
			style={{'--text-color': textColor} as CSSProperties}
		>
			{settings.displayAuthorAvatar && !compact && <Image variant='rounded'
				className={cls.root__avatar}
				width={avatarSize}
				height={avatarSize}
				src={`https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}.png`}
			/>}
			<div className={cls.root__text} style={{paddingLeft: compact ? avatarSize + 16 : 0}}>
				{!compact && <span className={cls.root__text__name}>{message.author.global_name ?? message.author.username}</span>}
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
