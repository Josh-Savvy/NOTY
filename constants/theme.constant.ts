import { ColorSchemeName } from "react-native";

const lightTheme = {
	background: "#252525",
	primary: "#fff",
};
const darkTheme = {
	background: "#686868",
	primary: "#fff",
};
export const currentTheme = (theme: ColorSchemeName) => {
	return theme === "dark" ? lightTheme : lightTheme;
};

const globalTheme = {
	lightTheme,
	darkTheme,
};

export default globalTheme;
