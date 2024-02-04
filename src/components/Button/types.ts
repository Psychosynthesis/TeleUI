export type ButtonProps = {
	children?: string | React.ReactNode;
	onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
	type?: "outline";
	size?: number;
	color?: string;
	className?: string;
	disabled?: boolean;
}
