import classNames from '@shared/lib/classNames/classNames';
import { FC, PropsWithChildren } from 'react';
import cls from './WithLabel.module.scss';

export const WithLabel: FC<Props> = ({ className, children, label }) => {
	return (
		<div className={classNames(cls.root, {}, [className])}>
			<label className={cls.root__label} >
				{label}
			</label>
			{children}
		</div>
	);
};

interface Props extends PropsWithChildren{
	className?: string,
	label: string
}
