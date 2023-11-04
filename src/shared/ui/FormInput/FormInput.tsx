import classNames from '@shared/lib/classNames/classNames';
import cls from './FormInput.module.scss';

const FormInput: React.FC<Props> = ({ label, error, width, className, onChange, value, ...props }) => {
	return (
		<div className={cls.root} style={{ width: width }}>
			<fieldset className={cls.root__fieldset}>
				<input value={value} 
					onChange={(e) => onChange(e.target.value)} 
					autoComplete={label} 
					className={classNames(cls.root__fieldset__input,{[cls.errorInput]: !!error}, [className])} 
					{...props} 
				/>
				<label className={cls.root__fieldset__label}>{label}</label>
			</fieldset>
			{error && <div className={cls.root__error}>{error}</div>}
		</div>
	);
};

interface Props extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'> {
	label?: string,
	className?: string,
	error?: string,
	width?: string,
	onChange: (value: string) => void,
	value: string | number
}

export { FormInput };

