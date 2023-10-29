import { Attachment, Embed } from '@entities/Chat/model/types/Message';
import classNames from '@shared/lib/classNames/classNames';
import { Image } from '@shared/ui/Image/Image';
import { FC } from 'react';
import cls from './Message.module.scss';

export const MessageContent: FC<Props> = ({ className, content, attachments, embeds }) => {
	console.log(attachments);
	return (
		<div className={classNames(cls.root__text__content, {}, [className])}>
			{content}
			{attachments?.map(a => (
				<Image width={'auto'} height={'auto'} key={a.id} src={a.url}/>
			))}
			{embeds?.map(e => (
				<Image width={'auto'} height={'auto'} key={e.url} src={e.url}/>
			))}
		</div>
	);
};

interface Props {
	className?: string,
	content: string,
	attachments: Attachment[],
	embeds: Embed[],
}
