import classNames from '@shared/lib/classNames/classNames';
import { FC } from 'react';
import cls from './ColorPicker.module.scss';

export const ColorPicker: FC<Props> = ({ className, value, onChange, ...props}) => {
	return (
		<input className={classNames(cls.root, {}, [className])}
			value={value}
			onChange={(e) => onChange(e.target.value)}
			{...props}
			type='color' 
		>
			
		</input>
	);
};

interface Props extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'value' | 'onChange'> {
	className?: string,
	value: string,
	onChange: (value: string) => void
}
