import cls from './Checkbox.module.scss';

const Checkbox: React.FC<Props> = ({checked, name, onChange}) => {
	return (
		<label className={cls.root} htmlFor={name}>
			<input type="checkbox" className={cls.root__input} id={name} 
				checked={checked} 
				onMouseDown={e => e.preventDefault()}
				onChange={e => {
					onChange(e.target.checked);}
				}
			/>
			<span className={cls.root__toggleTrack}>
				<span className={cls.toggleIndicator}>
					<span className={cls.checkMark}>
						<svg viewBox="0 0 24 24" id="ghq-svg-check" role="presentation" aria-hidden="true">
							<path d="M9.86 18a1 1 0 01-.73-.32l-4.86-5.17a1.001 1.001 0 011.46-1.37l4.12 4.39 8.41-9.2a1 1 0 111.48 1.34l-9.14 10a1 1 0 01-.73.33h-.01z"></path>
						</svg>
					</span>
				</span>
			</span>
		</label>
	);
};
type Props = {
	checked?: boolean;
	name?: string;
	onChange: (e: boolean) => void;
}
export { Checkbox };
