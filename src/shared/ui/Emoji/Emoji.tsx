import classNames from '@shared/lib/classNames/classNames';
import { FC } from 'react';
import cls from './Emoji.module.scss';

export const Emoji: FC<Props> = ({ className, src }) => {
	const emojiId = src.split(':').at(-1)?.slice(0, -1);
	return (
		<div className={classNames(cls.root, {}, [className])}
			style={{backgroundImage: `url(https://cdn.discordapp.com/emojis/${emojiId}.webp)`}}
		>
			
		</div>
	);
};

interface Props {
	className?: string,
	width?: number,
	height?: number,
	alt?: string,
	src: string
}
