import classNames from '@shared/lib/classNames/classNames';
import { Messages } from '@widgets/Messages';
import { FC } from 'react';
import cls from './Channel.module.scss';

export const Channel: FC<Props> = ({ className }) => {
	return (
		<div className={classNames(cls.root, {}, [className])}>
			<Messages />
		</div>
	);
};

interface Props {
	className?: string
}
