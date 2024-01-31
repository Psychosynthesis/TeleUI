export type SimpleInputProps = AlwaysProps & ConditionalProps;

declare type AlwaysProps = {
  value: string|number|null;
  valueSetter: (value: any) => void;
  className?: string;
  placeholder?: string;
  label?: string;
  inputStyle?: React.CSSProperties;
  borderColor?: string;
}

declare type ConditionalProps =
  | {
      type?: "number";
      max?: number;
    }
  | {
      type?: "text";
      max: never;
    };
