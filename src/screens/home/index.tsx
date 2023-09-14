import React from "react";
import {
	View,
	Text,
	Dimensions,
	useColorScheme,
	ColorSchemeName,
	TouchableOpacity,
	Image,
} from "react-native";
import NoteHighlightCard from "../../components/organisms/home/NoteHighlightCard";
import ScreenLayout from "../../components/layouts/ScreenLayout";
import { StyleSheet } from "react-native";
import { currentTheme } from "../../../constants/theme.constant";
import { InfoIcon, SearchIcon } from "../../components/icons";

export default function HomeScreen({ navigation }: any) {
	const theme = useColorScheme();
	const { width, height } = Dimensions.get("window");

	return (
		<ScreenLayout>
			<View>
				<View style={styles(theme).header}>
					<Text style={styles(theme).headerText}>Notes</Text>
					<View style={styles(theme).headerIconsContainer}>
						<TouchableOpacity activeOpacity={0.6} style={styles(theme).icon}>
							<SearchIcon />
						</TouchableOpacity>
						<TouchableOpacity activeOpacity={0.6} style={styles(theme).icon}>
							<InfoIcon />
						</TouchableOpacity>
					</View>
				</View>
				<Image
					style={{
						width: width * 0.8,
						alignSelf: "center",
						height: height * 0.6,
						backgroundColor: "red",
					}}
					resizeMode="contain"
					source={require("../../../assets/home/illustration_1.png")}
				/>
				<Text
					children="Create your first note !"
					style={{
						alignSelf: "center",
						color: currentTheme(theme).primary,
						fontSize: 20,
						top: -500,
					}}
				/>
			</View>
			{/* <NoteHighlightCard /> */}
		</ScreenLayout>
	);
}

const styles = (theme: ColorSchemeName) =>
	StyleSheet.create({
		header: {
			flexDirection: "row",
			alignContent: "center",
			alignItems: "center",
			display: "flex",
			justifyContent: "space-between",
		},
		headerText: {
			color: currentTheme(theme).primary,
			fontSize: 40,
		},
		headerIconsContainer: {
			flexDirection: "row",
			alignContent: "center",
			alignItems: "center",
			gap: 10,
		},
		icon: {
			backgroundColor: "#3B3B3B",
			padding: 15,
			alignContent: "center",
			alignItems: "center",
			alignSelf: "center",
			borderRadius: 10,
		},
	});
