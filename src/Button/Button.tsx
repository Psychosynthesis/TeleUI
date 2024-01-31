import clsx from 'clsx';

import { Icon } from '..';
import './style.scss';

import type { ButtonProps }  from './types';

export const Button: React.FC<ButtonProps> = ({
	type, size, color, icon, className, children, onClick, disabled
}) => {
	const height = size ? size + 'px' : 'auto';
	const width = !children ? height : undefined;
	const iconSize = size ? (size - 16) : 30;
	const onClickHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		if (disabled) return;
		onClick(event);
	}

	const cls = clsx({ 'custom-button': true, [type!]: type, [color!]: color, [className!]: className });
	return (
		<button className={cls} onClick={onClickHandler} style={size ? { width, height } : {}} disabled={disabled}>
			{icon && <Icon name={icon} className="button-icon" size={iconSize} />}{ children }
		</button>
	);
};
