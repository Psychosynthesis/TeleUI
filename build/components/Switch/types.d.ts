/// <reference types="react" />
import type { Color } from '../../types';
export type SwitchProps = {
    selected: boolean;
    switchHandler: () => any;
    enabled?: boolean;
    className?: string;
    style?: React.CSSProperties;
    color: Color;
    defaultColor: Color;
};
