import React from "react";
import { ViewStyle } from "react-native";
import { Path, Svg, SvgProps } from "react-native-svg";

export interface IconPropsInterface extends SvgProps {
	width?: string | number;
	height?: string | number;
	color?: string;
	style?: ViewStyle;
}

export function SearchIcon(props: IconPropsInterface) {
	const { color, height, width } = props;

	return (
		<Svg
			width={width || "20"}
			height={height || "20"}
			viewBox="0 0 18 18"
			fill="none"
			{...props}
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
export function PlusIcon(props: IconPropsInterface) {
	const { color, height, width } = props;

	return (
		<Svg
			width={width || "20"}
			height={height || "20"}
			viewBox="0 0 28 28"
			fill="none"
		>
			<Path
				d="M26 16H16V26C16 27.1 15.1 28 14 28C12.9 28 12 27.1 12 26V16H2C0.9 16 0 15.1 0 14C0 12.9 0.9 12 2 12H12V2C12 0.9 12.9 0 14 0C15.1 0 16 0.9 16 2V12H26C27.1 12 28 12.9 28 14C28 15.1 27.1 16 26 16Z"
				fill={color || "white"}
			/>
		</Svg>
	);
}
export function ChevronBack(props: IconPropsInterface) {
	const { color, height, width } = props;
	return (
		<Svg
			{...props}
			width={width || "20"}
			height={height || "20"}
			viewBox="0 0 15 24"
			fill="none"
		>
			<Path
				d="M13.42 1.41996C12.64 0.639961 11.38 0.639961 10.6 1.41996L1.41996 10.6C0.639961 11.38 0.639961 12.64 1.41996 13.42L10.6 22.6C11.38 23.38 12.64 23.38 13.42 22.6C14.2 21.82 14.2 20.56 13.42 19.78L5.65996 12L13.42 4.23996C14.2 3.45996 14.18 2.17996 13.42 1.41996Z"
				fill={color || "white"}
			/>
		</Svg>
	);
}
export function EyeIcon(props: IconPropsInterface) {
	const { color, height, width } = props;
	return (
		<Svg
			width={width || "20"}
			height={height || "20"}
			viewBox="0 0 22 15"
			fill="none"
		>
			<Path
				d="M11 2C14.79 2 18.17 4.13 19.82 7.5C18.17 10.87 14.79 13 11 13C7.21 13 3.83 10.87 2.18 7.5C3.83 4.13 7.21 2 11 2ZM11 0C6 0 1.73 3.11 0 7.5C1.73 11.89 6 15 11 15C16 15 20.27 11.89 22 7.5C20.27 3.11 16 0 11 0ZM11 5C12.38 5 13.5 6.12 13.5 7.5C13.5 8.88 12.38 10 11 10C9.62 10 8.5 8.88 8.5 7.5C8.5 6.12 9.62 5 11 5ZM11 3C8.52 3 6.5 5.02 6.5 7.5C6.5 9.98 8.52 12 11 12C13.48 12 15.5 9.98 15.5 7.5C15.5 5.02 13.48 3 11 3Z"
				fill={color || "white"}
			/>
		</Svg>
	);
}
export function DisketteIcon(props: IconPropsInterface) {
	const { color, height, width } = props;
	return (
		<Svg
			width={width || "20"}
			height={height || "20"}
			viewBox="0 0 21 18"
			fill="none"
		>
			<Path
				d="M16.5926 0H2.37037C1.05481 0 0 0.9 0 2V16C0 17.1 1.05481 18 2.37037 18H18.963C20.2667 18 21.3333 17.1 21.3333 16V4L16.5926 0ZM18.963 16H2.37037V2H15.6089L18.963 4.83V16ZM10.6667 9C8.69926 9 7.11111 10.34 7.11111 12C7.11111 13.66 8.69926 15 10.6667 15C12.6341 15 14.2222 13.66 14.2222 12C14.2222 10.34 12.6341 9 10.6667 9ZM3.55556 3H14.2222V7H3.55556V3Z"
				fill={color || "white"}
			/>
		</Svg>
	);
}
export function PenIcon(props: IconPropsInterface) {
	const { color, height, width } = props;
	return (
		<Svg
			width={width || "20"}
			height={height || "20"}
			viewBox="0 0 24 24"
			fill="none"
		>
			<Path
				d="M15.4998 5.49994L18.3282 8.32837M3 20.9997L3.04745 20.6675C3.21536 19.4922 3.29932 18.9045 3.49029 18.3558C3.65975 17.8689 3.89124 17.4059 4.17906 16.9783C4.50341 16.4963 4.92319 16.0765 5.76274 15.237L17.4107 3.58896C18.1918 2.80791 19.4581 2.80791 20.2392 3.58896C21.0202 4.37001 21.0202 5.63634 20.2392 6.41739L8.37744 18.2791C7.61579 19.0408 7.23497 19.4216 6.8012 19.7244C6.41618 19.9932 6.00093 20.2159 5.56398 20.3879C5.07171 20.5817 4.54375 20.6882 3.48793 20.9012L3 20.9997Z"
				stroke={color || "#000000"}
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</Svg>
	);
}
export function WarningIcon(props: IconPropsInterface) {
	const { color, height, width } = props;
	return (
		<Svg
			style={{ ...props.style }}
			width={width || "30"}
			height={height || "30"}
			viewBox="0 0 30 30"
			fill="none"
		>
			<Path
				d="M15.0001 0.599976C7.0513 0.599976 0.600098 7.05117 0.600098 15C0.600098 22.9488 7.0513 29.4 15.0001 29.4C22.9489 29.4 29.4001 22.9488 29.4001 15C29.4001 7.05117 22.9489 0.599976 15.0001 0.599976ZM16.4401 22.2H13.5601V13.56H16.4401V22.2ZM16.4401 10.68H13.5601V7.79997H16.4401V10.68Z"
				fill={color || "#606060"}
			/>
		</Svg>
	);
}
export function DeleteIcon(props: IconPropsInterface) {
	const { color, height, width } = props;
	return (
		<Svg
			style={{ ...props.style }}
			width={width || "30"}
			height={height || "30"}
			viewBox="0 0 28 36"
			fill="none"
		>
			<Path
				d="M2 32.8085C2 35.0553 3.8 36.8936 6 36.8936H22C24.2 36.8936 26 35.0553 26 32.8085V8.2979H2V32.8085ZM28 2.17024H21L19 0.127686H9L7 2.17024H0V6.25535H28V2.17024Z"
				fill={color || "#fff"}
			/>
		</Svg>
	);
}
export function CloseIcon(props: IconPropsInterface) {
	const { color, height, width } = props;
	return (
		<Svg
			style={{ ...props.style }}
			width={width || "30"}
			height={height || "30"}
			viewBox="0 0 14 14"
			fill="none"
		>
			<Path
				d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
				fill={color || "#ccc"}
			/>
		</Svg>
	);
}
