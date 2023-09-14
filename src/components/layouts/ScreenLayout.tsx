import React from "react";
import { View, Text, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default function ScreenLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<View>
			<View style={{ marginTop: height * 0.07, paddingHorizontal: width * 0.05 }}>
				{children}
			</View>
		</View>
	);
}
