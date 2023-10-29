import { Message as MessageType } from '@entities/Chat/model/types/Message';
import classNames from '@shared/lib/classNames/classNames';
import { Image } from '@shared/ui/Image/Image';
import { FC } from 'react';
import cls from './Message.module.scss';

export const Message: FC<Props> = ({ className, message }) => {
	return (
		<div className={classNames(cls.root, {}, [className])}>
			<Image variant='rounded'
				width={48}
				height={48}
				src={`https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}.png`}
			/>
			<div className={cls.root__text}>
				<span className={cls.root__text__name}>{message.author.global_name}</span>
				<span className={cls.root__text__content}>{message.content}</span>
			</div>
		</div>
	);
};

interface Props {
	className?: string,
	message: MessageType
}
