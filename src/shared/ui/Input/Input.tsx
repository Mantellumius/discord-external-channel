import classNames from '@shared/lib/classNames/classNames';
import { forwardRef } from 'react';
import cls from './Input.module.scss';

export const Input = forwardRef<HTMLInputElement, Props>(function Input({ className, onChange, type = 'text', ...props }, ref) {
	return (
		<input 
			className={classNames(cls.root, {}, [className])}
			onChange={(e) => onChange?.(e.target.value)}
			type={type}
			autoComplete="off"
			autoCorrect="off"
			ref={ref}
			{...props}
		>
			
		</input>
	);
});

interface Props extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
	className?: string,
	onChange?: (value: string) => void
}
