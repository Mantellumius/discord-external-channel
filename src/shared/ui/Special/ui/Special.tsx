import classNames from '@shared/lib/classNames/classNames';
import { Emoji } from '@shared/ui/Emoji/Emoji';
import { FC } from 'react';
import cls from './Special.module.scss';

export const Special: FC<Props> = ({ className, src}) => {
	return (
		<Emoji src={src} className={classNames(cls.root, {}, [className])}>
			
		</Emoji>
	);
};

interface Props {
	className?: string,
	src: string
}
