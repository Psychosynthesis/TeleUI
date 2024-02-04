export type AmountInputProps = {
  value: number;
  valueSetter: (value: number) => void;
  className?: string;
  placeholder?: string;
  label?: string;
  units?: string;
  inputStyle?: React.CSSProperties;
  max?: number;
}
