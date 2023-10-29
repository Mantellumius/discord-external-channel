import { Attachment, Embed } from '@entities/Chat/model/types/Message';
import { EMOJI_REGEXP } from '@shared/consts/regexps';
import classNames from '@shared/lib/classNames/classNames';
import parseString from '@shared/lib/parseString/parseString';
import { Emoji } from '@shared/ui/Emoji/Emoji';
import { Image } from '@shared/ui/Image/Image';
import { FC } from 'react';
import cls from './Message.module.scss';

export const MessageContent: FC<Props> = ({ className, content, attachments, embeds }) => {
	const parsedContent = parseString(content);
	return (
		<div className={classNames(cls.root__text__content, {}, [className])}>
			{parsedContent.map(c => {
				console.log(EMOJI_REGEXP.test(c), c);
				return <>
					{EMOJI_REGEXP.test(c) ? 
						<Emoji src={c} /> : 
						c 
					}
				</>;
			})}
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
