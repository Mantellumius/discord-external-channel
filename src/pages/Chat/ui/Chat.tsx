import { selectSettings } from '@entities/Settings';
import classNames from '@shared/lib/classNames/classNames';
import { Messages } from '@widgets/Messages';
import { CSSProperties, FC } from 'react';
import { useSelector } from 'react-redux';
import cls from './Chat.module.scss';

export const Chat: FC<Props> = ({ className }) => {
	const settings = useSelector(selectSettings);
	return (
		<div className={classNames(cls.root, {}, [className])} 
			style={{'--transperancy': `${settings.transperancy}%`} as CSSProperties}
		>
			<Messages />
		</div>
	);
};

interface Props {
	className?: string
}
