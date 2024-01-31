import { useRef } from 'react';
import { getRandomString } from 'vanicom';
import clsx from 'clsx';
import './style.scss';

import type { CheckboxProps }  from './types';

export const Checkbox: React.FC<CheckboxProps> = ({
	text, className, checked, valueSetter, rounded
}) => {
	const checkboxRef = useRef(null);
	const idForLabel = getRandomString(6);

	const onChangeHandler = () => {
		// @ts-ignore
		valueSetter(checkboxRef.current.checked);
	}

	const containerClass = clsx({ 'custom-checkbox-container': true, 'no-text': !text, [className!]: className, 'rounded': rounded });

	return (
		<div className={containerClass}>
			<input
				type="checkbox"
				className="custom-checkbox"
				id={idForLabel}
				onChange={onChangeHandler}
				ref={checkboxRef}
				checked={checked}
			/>
			<label htmlFor={idForLabel}>{text}</label>
		</div>
	);
};
