import classNames from '@shared/lib/classNames/classNames';
import { CSSProperties, FC } from 'react';
import cls from './Range.module.scss';

export const Range: FC<Props> = ({ className, min, max, value, step = undefined, onChange }) => {
	return (
		<input type='range' min={min} max={max} step={step} 
			value={value} onChange={e => onChange(Number(e.target.value))} 
			className={classNames(cls.root, {}, [className])}
			style={{'--step-size': `${100 / (max / (step ?? 1))}%`} as CSSProperties}
		>
			
		</input>
	);
};

interface Props {
	className?: string,
	min: number,
	max: number,
	value: number,
	step?: number,
	onChange: (value: number) => void
}
