import classNames from '@shared/lib/classNames/classNames';
import React, { FC, PropsWithChildren } from 'react';
import cls from './H.module.scss';

type Size = 1 | 2 | 3 | 4 | 5 | 6;
type Variant = 'default' | 'primary';

export const H: FC<Props> = ({ className, children, size = 1, variant = 'default' }) => {
	return React.createElement(`h${size}`, { 
		className: classNames(cls.root, {}, [className, cls[variant]]),
	}, children);
};

interface Props extends PropsWithChildren {
	className?: string,
	size?: Size,
	variant?: Variant
}
