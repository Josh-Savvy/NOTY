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
import { InfoIcon, PlusIcon, SearchIcon } from "../../components/icons";

const { width, height } = Dimensions.get("window");

export default function HomeScreen({ navigation }: any) {
	const theme = useColorScheme();

	return (
		<ScreenLayout>
			<View>
				<View style={styles(theme).header}>
					<Text style={styles(theme).headerText}>Notes</Text>
					<View style={styles(theme).headerIconsContainer}>
						<TouchableOpacity style={styles(theme).icon}>
							<SearchIcon />
						</TouchableOpacity>
						<TouchableOpacity style={styles(theme).icon}>
							<InfoIcon />
						</TouchableOpacity>
					</View>
				</View>
				<Image
					style={{
						width: width * 0.8,
						alignSelf: "center",
						height: height * 0.6,
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
						top: -110,
					}}
				/>
				<TouchableOpacity
					onPress={() => navigation.navigate("EditorScreen")}
					activeOpacity={0.6}
					style={styles(theme).addButton}
				>
					<PlusIcon height={30} width={30} />
				</TouchableOpacity>
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
		addButton: {
			borderRadius: 50,
			padding: 20,
			backgroundColor: "#222",
			position: "absolute",
			shadowColor: "#000",
			shadowOffset: {
				height: 5,
				width: 5,
			},
			shadowOpacity: 3,
			shadowRadius: 20,
			bottom: height * -0.18,
			right: 0,
		},
	});
