import { LinkingOptions } from "@react-navigation/native";
import * as Linking from "expo-linking";
import { RootStackParamList } from "../../interfaces/navigation";
import HomeScreen from "../screens/home";

const linkingConfig: LinkingOptions<RootStackParamList> = {
	prefixes: [Linking.createURL("/")],
	config: {
		screens: {
			Root: {
				screens: {
					HomeScreen: {
						screens: {
							HomeScreen: "HomeScreen",
						},
					},
					EditorScreen: {
						screens: {
							EditorScreen: "EditorScreen",
						},
					},
					SearchScreen: {
						screens: {
							SearchScreen: "SearchScreen",
						},
					},
				},
			},
			HomeScreen: {
				screens: {
					HomeScreen: "HomeScreen",
				},
			},
			EditorScreen: {
				screens: {
					EditorScreen: "EditorScreen",
				},
			},
			SearchScreen: {
				screens: {
					SearchScreen: "SearchScreen",
				},
			},
		},
	},
};

export default linkingConfig;
