import classNames from '@shared/lib/classNames/classNames';
import { FC } from 'react';
import cls from './Text.module.scss';

export type Variant = 'clear' | 'outline';
export type FontType = 'default' | 'monospace';
export const Text: FC<Props> = ({ className, children, variant='clear', fontType='default' }) => {
	return (
		<p className={classNames(cls.root, {}, [className, cls[variant], cls[fontType]])}>
			{children}
		</p>
	);
};

interface Props {
	className?: string,
	children: string,
	variant?: Variant,
	fontType?: FontType,
}
