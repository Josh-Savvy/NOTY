import React from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";
import { ChevronBack } from "../icons";

const { width, height } = Dimensions.get("window");

export default function ScreenLayout({
	children,
	showBackIcon = false,
	screenTitle,
	rightIcon,
}: {
	children: React.ReactNode;
	showBackIcon?: boolean;
	screenTitle?: string;
	rightIcon?: any;
}) {
	return (
		<View style={styles.container}>
			<View style={styles.headerContainer}>
				{showBackIcon && (
					<View style={styles.icon}>
						<ChevronBack />
					</View>
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
