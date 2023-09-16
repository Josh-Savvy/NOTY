import React from "react";
import {
	View,
	Text,
	Dimensions,
	StyleSheet,
	TouchableOpacity,
} from "react-native";
import { ChevronBack } from "../icons";
import IScreenLayout from "../../../interfaces/layout.interface";

const { width, height } = Dimensions.get("window");

export default function ScreenLayout({
	children,
	showBackIcon = false,
	screenTitle,
	rightIcon,
	navigation,
	handleGoBackNavigation,
}: IScreenLayout) {
	return (
		<View style={styles.container}>
			<View style={styles.headerContainer}>
				{showBackIcon && (
					<TouchableOpacity
						activeOpacity={0.6}
						onPress={
							handleGoBackNavigation
								? handleGoBackNavigation
								: () => console.error("No function to handle go back")
						}
						style={styles.icon}
					>
						<ChevronBack />
					</TouchableOpacity>
				)}
				{screenTitle && <Text>{screenTitle}</Text>}
				{rightIcon && <View>{rightIcon}</View>}
			</View>
			<View>{children}</View>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		marginTop: height * 0.07,
		paddingHorizontal: width * 0.05,
	},
	headerContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginBottom: 20,
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
