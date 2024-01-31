import type { Color }  from '@Commn/types';

export type RangeProps = {
  className?: string;
  lineColor?: Color;
  step?: number;
  value: number;
  valueSetter: (value: number) => void;
  min?: number;
  max?: number;
}
