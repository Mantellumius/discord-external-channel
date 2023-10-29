import classNames from '@shared/lib/classNames/classNames';
import { FC } from 'react';
import cls from './Emoji.module.scss';

export const Emoji: FC<Props> = ({ className, height = 24, width = 24, src }) => {
	return (
		<div className={classNames(cls.root, {}, [className])}
			style={{backgroundImage: `url(${src})`, height, width}}
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
