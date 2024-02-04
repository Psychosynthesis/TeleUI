import type { Color } from '../types';

export type SwitchProps = {
  selected: boolean;
  switchHandler: () => any;
  enabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
  activeColor: Color;
  defaultColor: Color;
}
