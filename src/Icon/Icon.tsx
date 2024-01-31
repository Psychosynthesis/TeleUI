import clsx from 'clsx';

import './style.scss';

import type { IconProps }  from './types';

export const Icon: React.FC<IconProps> = ({
	color, backgroundColor, size, name, className, onClick
}) => {
	const definedSize = size ? size : 24;
	const sizeFormatted = size ? size + 'px' : 'auto';
	const innerIconSize = backgroundColor ? definedSize - 2 : definedSize;
	const maxSize = size ? sizeFormatted : '30px';

	const cls = clsx({ "icon-container": true, [className!]: className });
	return (
		<div
			className={cls}
			onClick={onClick}
			style={{
				width: sizeFormatted,
				height: sizeFormatted,
				maxHeight: maxSize,
				maxWidth: maxSize
			}}
		>
			<div className="background-icon-plate" style={{ background: backgroundColor, maxHeight: innerIconSize }} >
				<svg
					style={{ color: color, width: innerIconSize+'px', height: innerIconSize+'px' }}
					role="img"
					viewBox={`0 0 ${innerIconSize} ${innerIconSize}`}
				>
					<use xlinkHref={'/sprite.svg#'+name} xmlnsXlink="https://www.w3.org/1999/xlink"></use>
				</svg>
			</div>
		</div>
	);
};
