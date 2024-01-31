export type ButtonProps = {
	children?: string | React.ReactNode;
	onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
	icon?: string;
	type?: "outline";
	size?: number;
	color?: string;
	className?: string;
	disabled?: boolean;
}
