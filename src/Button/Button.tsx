import clsx from 'clsx';
import './style.scss';

import type { ButtonProps }  from './types';

export const Button: React.FC<ButtonProps> = ({
	type, size, color, className, children, onClick, disabled
}) => {
	const height = size ? size + 'px' : 'auto';
	const width = !children ? height : undefined;
	const onClickHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		if (disabled) return;
		onClick(event);
	}
	const mainStyle = {
		width: size ? width : '',
		height: size ? height : '',
		color: color && (type === 'outline' ? color : ''),
		background: color && (type !== 'outline' ? color : ''),
		borderColor: color,
	}

	const cls = clsx({ 'custom-button': true, [type!]: type, [color!]: color, [className!]: className });
	return (
		<button className={cls} onClick={onClickHandler} style={mainStyle} disabled={disabled}>
			{ children }
		</button>
	);
};
