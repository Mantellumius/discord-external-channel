import { EMOJI_REGEXP, URL_REGEXP } from '@shared/consts/regexps';
import classNames from '@shared/lib/classNames/classNames';
import isImage from '@shared/lib/isImage/isImage';
import parseString from '@shared/lib/parseString/parseString';
import { A, Emoji, Image } from '@shared/ui';
import { APIAttachment, APIEmbed } from 'discord-api-types/v10';
import { FC, Fragment } from 'react';

export const MessageContent: FC<Props> = ({ className, content, attachments, embeds }) => {
	const parsedContent = parseString(content);

	return (
		<div className={classNames('', {}, [className])}>
			{parsedContent.map((c, i) => {
				return <Fragment key={i}>
					{EMOJI_REGEXP.test(c) ? 
						<Emoji src={c} /> : 
						URL_REGEXP.test(c) ? 
							<A href={c}>{c}</A>:
							c 
					}
				</Fragment>;
			})}
			{attachments?.filter(a => isImage(a.filename)).map(a => (
				<Image width={'auto'} height={'auto'} key={a.id} src={a.url}/>
			))}
			{embeds
				?.filter(e => ['video', 'gifv', 'image'].some((type) => e.type === type))
				.map(e => (
					<Image width={'auto'} height={'auto'} key={e.url} src={(e.type === 'gifv' ? e.url + '.gif' : e.url) ?? ''}/>
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
