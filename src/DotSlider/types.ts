import type { OptionType }  from '@Commn/types';

export type DotSliderProps = {
  values: OptionType[];
  valueSetter: (value: any) => void;
  className?: string;
  lineColor?: string;
}
