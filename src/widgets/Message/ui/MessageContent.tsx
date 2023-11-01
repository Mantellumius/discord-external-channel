import { EMOJI_REGEXP } from '@shared/consts/regexps';
import classNames from '@shared/lib/classNames/classNames';
import isImage from '@shared/lib/isImage/isImage';
import parseString from '@shared/lib/parseString/parseString';
import { Emoji } from '@shared/ui/Emoji/Emoji';
import { Image } from '@shared/ui/Image/Image';
import { APIAttachment, APIEmbed, EmbedType } from 'discord-api-types/v10';
import { FC, Fragment } from 'react';
import cls from './Message.module.scss';

export const MessageContent: FC<Props> = ({ className, content, attachments, embeds }) => {
	const parsedContent = parseString(content);

	return (
		<div className={classNames(cls.root__text__content, {}, [className])}>
			{parsedContent.map((c, i) => {
				return <Fragment key={i}>
					{EMOJI_REGEXP.test(c) ? 
						<Emoji src={c} /> : 
						c 
					}
				</Fragment>;
			})}
			{attachments?.filter(a => isImage(a.filename)).map(a => (
				<Image width={'auto'} height={'auto'} key={a.id} src={a.url}/>
			))}
			{embeds?.filter(e => e.type === EmbedType.Image).map(e => (
				<Image width={'auto'} height={'auto'} key={e.url} src={e.url ?? ''}/>
			))}
		</div>
	);
};

interface Props {
	className?: string,
	content: string,
	attachments: APIAttachment[],
	embeds: APIEmbed[],
}
