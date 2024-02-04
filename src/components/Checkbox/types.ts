export type CheckboxProps = {
	text: string;
	checked?: boolean;
	valueSetter: (isChecked: boolean) => void;
	className?: string;
	rounded?: boolean;
}
