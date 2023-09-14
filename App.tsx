import React from "react";
import { StatusBar, useColorScheme } from "react-native";
import Navigation from "./src/navigation";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { RootSiblingParent } from "react-native-root-siblings";

export default function App() {
	const colorScheme = useColorScheme();

	return (
		<RootSiblingParent>
			<StatusBar
				// barStyle={colorScheme === "dark" ? "light-content" : "light-content"}
				barStyle={"light-content"}
			/>
			<SafeAreaProvider>
				<Navigation colorScheme={colorScheme} />
			</SafeAreaProvider>
		</RootSiblingParent>
	);
}
