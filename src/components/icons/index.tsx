import React from "react";
import { View, Text } from "react-native";
import { Path, Svg } from "react-native-svg";

export interface IconPropsInterface {
	width?: string | number;
	height?: string | number;
	color?: string;
}

export function SearchIcon(props: IconPropsInterface) {
	const { color, height, width } = props;

	return (
		<Svg
			width={width || "20"}
			height={height || "20"}
			viewBox="0 0 18 18"
			fill="none"
		>
			<Path
				d="M12.5 11H11.71L11.43 10.73C12.63 9.33001 13.25 7.42001 12.91 5.39001C12.44 2.61002 10.12 0.390015 7.32002 0.0500152C3.09002 -0.469985 -0.469985 3.09001 0.0500152 7.32001C0.390015 10.12 2.61002 12.44 5.39002 12.91C7.42002 13.25 9.33002 12.63 10.73 11.43L11 11.71V12.5L15.25 16.75C15.66 17.16 16.33 17.16 16.74 16.75C17.15 16.34 17.15 15.67 16.74 15.26L12.5 11ZM6.50002 11C4.01002 11 2.00002 8.99001 2.00002 6.50001C2.00002 4.01001 4.01002 2.00002 6.50002 2.00002C8.99002 2.00002 11 4.01001 11 6.50001C11 8.99001 8.99002 11 6.50002 11Z"
				fill={color || "white"}
			/>
		</Svg>
	);
}
export function InfoIcon(props: IconPropsInterface) {
	const { color, height, width } = props;

	return (
		<Svg
			width={width || "20"}
			height={height || "20"}
			viewBox="0 0 20 20"
			fill="none"
		>
			<Path
				d="M9 5H11V7H9V5ZM9 9H11V15H9V9ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18Z"
				fill={color || "white"}
			/>
		</Svg>
	);
}
