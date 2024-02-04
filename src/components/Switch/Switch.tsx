import clsx from 'clsx';
import './style.scss';

import type { SwitchProps }  from './types';

export const Switch: React.FC<SwitchProps> = ({
  className, selected, switchHandler, activeColor, defaultColor
}) => {
  const mainClass = clsx({ 'custom-switch': true, [className!]: className });
  const backgroundClass = clsx({ 'switch-background': true, 'no-select': true });
  const punktClass = clsx({ 'switch-punkt-selected': selected, 'switch-punkt': !selected });
  const color = selected ? activeColor : defaultColor;

  return (
    <div className={mainClass} onClick={switchHandler}>
      <div className={backgroundClass} style={{ background: color }}>
        <div className={punktClass} style={{ borderColor: activeColor }} >&nbsp;</div>
      </div>
    </div>
  );
}
