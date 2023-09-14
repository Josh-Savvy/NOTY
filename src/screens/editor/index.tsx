import React, { useEffect, useRef, useState } from "react";
import {
	View,
	Text,
	ColorSchemeName,
	StyleSheet,
	useColorScheme,
	TouchableOpacity,
	KeyboardAvoidingView,
	TextInput,
} from "react-native";
import ScreenLayout from "../../components/layouts/ScreenLayout";
import { DisketteIcon, EyeIcon, PenIcon } from "../../components/icons";
import TitleInput from "../../components/organisms/editor/TitleInput";
import ContentArea from "../../components/organisms/editor/ContentArea";
import { IEditorTitleInputRef } from "../../../interfaces/editor.interface";

export default function EditorScreen() {
	const theme = useColorScheme();
	const [editMode, setEditMode] = useState<boolean>(false);
	const titleRef = useRef<IEditorTitleInputRef>(null);

	return (
		<ScreenLayout
			showBackIcon
			rightIcon={
				<View style={{ flexDirection: "row", gap: 10 }}>
					<TouchableOpacity
						onPress={() => {
							setEditMode(!editMode);
							titleRef.current?.toggleFocus();
						}}
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
			<KeyboardAvoidingView
				behavior={"padding"}
				style={{ height: "100%", gap: 10 }}
			>
				<TitleInput ref={titleRef} />
				<ContentArea />
			</KeyboardAvoidingView>
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
