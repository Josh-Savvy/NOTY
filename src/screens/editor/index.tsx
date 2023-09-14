import React, { useRef, useState } from "react";
import {
	View,
	ColorSchemeName,
	StyleSheet,
	useColorScheme,
	TouchableOpacity,
	KeyboardAvoidingView,
	Modal,
	Text,
} from "react-native";
import ScreenLayout from "../../components/layouts/ScreenLayout";
import { DisketteIcon, EyeIcon, PenIcon } from "../../components/icons";
import TitleInput from "../../components/organisms/editor/TitleInput";
import ContentArea from "../../components/organisms/editor/ContentArea";
import { IEditorTitleInputRef } from "../../../interfaces/editor.interface";
import CustomPromptModal from "../../components/common/modals";

export default function EditorScreen() {
	const theme = useColorScheme();
	const [editMode, setEditMode] = useState<boolean>(false);
	const [showModal, setShowModal] = useState<boolean>(true);
	const titleRef = useRef<IEditorTitleInputRef>(null);
	const handleEditMode = () => {
		setEditMode(!editMode);
		setTimeout(function () {
			titleRef.current?.toggleFocus();
		}, 100);
	};

	return (
		<ScreenLayout
			showBackIcon
			rightIcon={
				<View style={{ flexDirection: "row", gap: 10 }}>
					<TouchableOpacity onPress={handleEditMode} style={styles.icon}>
						{editMode ? <EyeIcon /> : <PenIcon color="#fff" />}
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => setShowModal(!showModal)}
						style={styles.icon}
					>
						<DisketteIcon />
					</TouchableOpacity>
				</View>
			}
		>
			<KeyboardAvoidingView
				behavior={"padding"}
				style={{ height: "100%", gap: 10 }}
			>
				<TitleInput ref={titleRef} editable={editMode} />
				<ContentArea editable={editMode} />
			</KeyboardAvoidingView>
			{showModal ? (
				<CustomPromptModal
					isModalVisible={showModal}
					setModalVisible={setShowModal}
					promptText="Save Changes ?"
				/>
			) : null}
		</ScreenLayout>
	);
}
const styles = StyleSheet.create({
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
