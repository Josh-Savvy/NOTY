import React, { useState } from "react";
import {
	View,
	Text,
	ColorSchemeName,
	StyleSheet,
	useColorScheme,
	TouchableOpacity,
} from "react-native";
import ScreenLayout from "../../components/layouts/ScreenLayout";
import { DisketteIcon, EyeIcon, PenIcon } from "../../components/icons";

export default function EditorScreen() {
	const theme = useColorScheme();
	const [editMode, setEditMode] = useState<boolean>(true);
	return (
		<ScreenLayout
			showBackIcon
			rightIcon={
				<View style={{ flexDirection: "row", gap: 10 }}>
					<TouchableOpacity
						onPress={() => setEditMode(!editMode)}
						style={styles(theme).icon}
					>
						{editMode ? <EyeIcon /> : <PenIcon color="#fff" />}
					</TouchableOpacity>
					<TouchableOpacity style={styles(theme).icon}>
						<DisketteIcon />
					</TouchableOpacity>
				</View>
			}
		>
			<View>
				<Text>EditorScreen</Text>
			</View>
		</ScreenLayout>
	);
}
const styles = (theme: ColorSchemeName) =>
	StyleSheet.create({
		rightIconsContainer: {
			flexDirection: "row",
			alignContent: "center",
			justifyContent: "space-between",
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
