import clsx from 'clsx';
import { isExistAndNotNull } from 'vanicom';

import './style.scss';

import type { ProgressBarProps }  from './types';

export const ProgressBar: React.FC<ProgressBarProps> = ({
	size, color, backgroundColor, className, completed
}) => {
  const containerClass = clsx({ 'teleaps-progress-bar': true, [className!]: className });
  const backStyle = {
    background: backgroundColor ? backgroundColor : '',
  };
	const barStyle:React.CSSProperties = {
		padding: size ? `${size}px` : '2px',
		background: color ? color : '',
		width: '0',
	};

	if (isExistAndNotNull(completed)) {
		if (completed! > 100) {
			barStyle.width = '100%';
		} else if (completed! < 0) {
			barStyle.width = '0';
		} else {
			barStyle.width = completed + '%';
		}
	}



  return (
    <div className={containerClass}>
      <div className="bar-background" style={backStyle}>
        <span className="completed-progress" style={barStyle} />
      </div>
    </div>
  );
}
