import classNames from '@shared/lib/classNames/classNames';
import { FC } from 'react';
import cls from './Button.module.scss';

export const Button: FC<Props> = ({ className, children, ...props }) => {
	return (
		<button className={classNames(cls.root, {}, [className])} {...props}>
			{children}
		</button>
	);
};

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string
}
