import {
	DefaultTheme,
	DarkTheme,
	NavigationContainer,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import globalTheme from "../../constants/theme.constant";
import React from "react";
import { RootStackParamList } from "../../interfaces/navigation";
import linkingConfig from "../navigation/linkingConfig";
import HomeScreen from "../screens/home";
import EditorScreen from "../screens/editor";

export default function Navigation({ colorScheme }: any) {
	const mainColorScheme = colorScheme;
	const theme = mainColorScheme === "dark" ? DarkTheme : DefaultTheme;
	// override specific properties of the theme
	if (mainColorScheme === "light") {
		theme.colors = {
			...DefaultTheme.colors,
			...globalTheme.lightTheme,
		};
	} else {
		theme.colors = {
			...DarkTheme.colors,
			...globalTheme.lightTheme,
		};
	}
	console.log("current theme colors: ", theme.colors);
	return (
		<NavigationContainer linking={linkingConfig} theme={theme}>
			<RootNavigator />
		</NavigationContainer>
	);
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
	return (
		<Stack.Navigator
			initialRouteName="HomeScreen"
			screenOptions={{ headerShown: false }}
		>
			<Stack.Group
				screenOptions={{
					presentation: "card",
					headerShown: false,
				}}
			>
				<Stack.Screen name="HomeScreen" component={HomeScreen} />
				<Stack.Screen name="EditorScreen" component={EditorScreen} />
			</Stack.Group>
		</Stack.Navigator>
	);
}
