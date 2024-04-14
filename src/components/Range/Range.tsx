import { useRef } from "react";
import clsx from 'clsx';
import './style.scss';

import type { RangeProps }  from './types';

export const Range: React.FC<RangeProps> = ({ className, step, lineColor, value, valueSetter, min, max, }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const mainClass = clsx({ 'teleuirange-slider': true, [className!]: className });
  const handeChange = () => {
    const refBlock = inputRef?.current;
    const newVal = parseFloat(refBlock!.value);
    valueSetter(newVal);
  }

  return (
    <div className={mainClass}>
      <input
        type="range"
        step={step}
        style={{ backgroundColor: lineColor }}
        value={value}
        ref={inputRef}
        onChange={handeChange}
        min={min}
        max={max}
      />
    </div>
  );
};
