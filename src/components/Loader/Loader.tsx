import clsx from 'clsx';
import './style.scss';

import { type LoaderProps } from './types';

export const Loader = ({ size, className }: LoaderProps) => (
	<div className={clsx({'teleuispinner-container': true, [className!]: className })}>
		<div className="spinner" style={{ height: size + 'px', width: size + 'px' }} />
	</div>
);
