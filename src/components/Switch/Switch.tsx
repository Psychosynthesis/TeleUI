import clsx from 'clsx';
import './style.scss';

import type { SwitchProps }  from './types';

export const Switch: React.FC<SwitchProps> = ({
  className, selected, switchHandler, color, defaultColor
}) => {
  const mainClass = clsx({ 'teleaps-custom-switch': true, [className!]: className });
  const backgroundClass = clsx({ 'switch-background': true, 'no-select': true });
  const punktClass = clsx({ 'switch-punkt-selected': selected, 'switch-punkt': !selected });
  const mainColor = selected ? color : defaultColor;

  return (
    <div className={mainClass} onClick={switchHandler}>
      <div className={backgroundClass} style={{ background: mainColor }}>
        <div className={punktClass} style={{ borderColor: color }} >&nbsp;</div>
      </div>
    </div>
  );
}
