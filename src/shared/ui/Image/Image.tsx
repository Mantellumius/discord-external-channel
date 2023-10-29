import classNames from '@shared/lib/classNames/classNames';
import { FC } from 'react';
import cls from './Image.module.scss';

type Variant = 'square' | 'rounded';

export const Image: FC<Props> = ({ className, height = 24, width = 24, variant='square', src, alt, ...props }) => {
	return (
		<img loading='lazy' width={width} height={height} src={src} alt={alt ?? src}
			className={classNames(cls.root, {}, [className, cls[variant]])}
			{...props}
		/>
	);
};

interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {
	className?: string,
	width?: number | string,
	height?: number | string,
	alt?: string,
	variant?: Variant,
	src: string
}
