import classNames from '@shared/lib/classNames/classNames';
import { open } from '@tauri-apps/api/shell';
import { FC } from 'react';
import cls from './A.module.scss';

export const A: FC<Props> = ({ className, children, href, ...props }) => {
	return (
		<a className={classNames(cls.root, {}, [className])}
			onClick={() => open(href ?? '')}
			{...props}
		>
			{children}
		</a>
	);
};

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	className?: string,
	children: React.ReactNode
}
