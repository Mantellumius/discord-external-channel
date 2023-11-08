import classNames from '@shared/lib/classNames/classNames';
import { Emoji } from '@shared/ui';
import { FC } from 'react';

export const Special: FC<Props> = ({ className, src}) => {
	return (
		<Emoji src={src} className={classNames('', {}, [className])}>
			
		</Emoji>
	);
};

interface Props {
	className?: string,
	src: string
}
