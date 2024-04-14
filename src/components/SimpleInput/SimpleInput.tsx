import clsx from 'clsx';
import { useState } from 'react';

import './style.scss';

import type { SimpleInputProps }  from './types';

export const SimpleInput: React.FC<SimpleInputProps> = ({
	className, value, valueSetter, type, placeholder, label, inputStyle, max, borderColor
}) => {
	const [ inputError, setError ] = useState(false);
	const [ isFocused, setFocus ] = useState(false);
	const isNumericInput = type === "number";

	const handleChange = (eve: React.FormEvent<HTMLInputElement>) => {
		const rawValue = eve.currentTarget.value;
		let newValue: string | number;
		if (isNumericInput) {
			newValue = parseInt(rawValue, 10);
			if (!newValue) return;
			if (max && (newValue > max)) {
				newValue = max;
				setError(true);
			}
		} else {
			newValue = String(eve.currentTarget.value);
		}

	  valueSetter(newValue);
	}

	const handleFocus = () => setFocus(true);
	const handleFocusOff = () => setFocus(false);

	const mainClass = clsx({ 'teleuisimple-input': true, [className!]: className, 'unacceptable': inputError });
	const inputStylesCasted = { ...inputStyle }
	if (inputError && inputStylesCasted.color) delete inputStylesCasted.color;

	return (
		<div className={mainClass}>
			<div className="simple-input-main-row">
				{label && <div className="simple-input-label">{label}</div>}
				<input
					value={value ?? ''}
					onChange={handleChange}
					type={type}
					placeholder={placeholder}
					style={inputStylesCasted}
					inputMode={isNumericInput ? 'decimal' : undefined}
					onFocus={handleFocus}
					onBlur={handleFocusOff}
				/>
			</div>
			<div className="simple-input-underline" style={{ borderColor: isFocused && borderColor ? borderColor : undefined }} />
		</div>
	);
};
