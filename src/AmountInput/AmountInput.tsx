import clsx from 'clsx';
import { useState, useEffect, useRef } from 'react';

import './style.scss';

import type { AmountInputProps }  from './types';

export const AmountInput: React.FC<AmountInputProps> = ({
	className, value, valueSetter, placeholder, label, inputStyle, units, max
}) => {
	const [ fieldWidth, setWidth ] = useState('auto');
	const [ inputError, setError ] = useState(false);
	const inputRef: React.RefObject<HTMLInputElement> = useRef(null);

	const errorCheck = (value: number) => {
		if (max && (value > max)) {
			setError(true);
		} else {
			setError(false);
		}
	}

	const handleChange = () => {
		if (!inputRef.current) return;
		const rawValue = inputRef.current.value; // string.replace(/^0+/, '');
		let newValue: number;
		newValue = parseFloat(rawValue);
		if (isNaN(newValue)) {
			newValue = 0;
		} else if (max && (newValue > max)) {
			newValue = max;
			setError(true);
		}

	  valueSetter(newValue);
		inputRef.current.value = String(newValue);
	}

	const mainClass = clsx({ 'amount-input-container': true, [className!]: className, 'unacceptable': inputError });
	const inputStylesCasted = { ...inputStyle, width: fieldWidth }
	if (inputError && inputStylesCasted.color) delete inputStylesCasted.color;

	useEffect(
		() => {
			if (inputRef.current) {
				inputRef.current.value = String(value);
				setWidth((String(value).length * 20) + 13 + 'px');
				if (max && value) { errorCheck(value); }
			}
		},
		[value, max, inputRef.current]
	);

	return (
		<div className={mainClass}>
			<div className="amount-input-main-row">
				{label && <div className="amount-input-label">{label}</div>}
				<input
					onChange={handleChange}
					type='number'
					placeholder={placeholder}
					style={inputStylesCasted}
					inputMode={'decimal'}
					ref={inputRef}
				/>
				{units && <div className="amount-input-units">{units}</div>}
			</div>
		</div>
	);
};
