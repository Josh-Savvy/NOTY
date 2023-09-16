import React, { Dispatch, SetStateAction } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { EyeIcon, PenIcon, DisketteIcon } from "../../icons";
import { ModalPrompt } from "./EditorComponent";
import { IEditorState } from "../../../../interfaces/editor.interface";

const EditorRightIcon = (props: {
	handleEditMode: any;
	showEditHelp: any;
	editMode: any;
	setShowModal: Dispatch<SetStateAction<ModalPrompt>> | null;
	showModal: ModalPrompt;
	styles: any;
	stateHasChanged: boolean;
}) => {
	const {
		handleEditMode,
		showEditHelp,
		editMode,
		setShowModal,
		styles,
		stateHasChanged,
	} = props;

	return (
		<View style={{ flexDirection: "row", gap: 10 }}>
			<TouchableOpacity onPress={handleEditMode} style={styles.icon}>
				{showEditHelp && (
					<View
						style={{
							position: "absolute",
							right: 65,
							top: 12,
							borderRadius: 6,
							padding: 8,
							paddingHorizontal: 15,
							backgroundColor: "#111",
						}}
					>
						<Text
							style={{
								color: "#fff",
								width: "100%",
							}}
						>
							Click here to {"\n"}start editing
						</Text>
						<View
							style={{
								position: "absolute",
								backgroundColor: "#111",
								padding: 10,
								right: -2,
								top: 4,
								transform: [{ rotate: "45deg" }],
								zIndex: -5,
							}}
						></View>
					</View>
				)}
				{editMode ? <EyeIcon /> : <PenIcon color="#fff" />}
			</TouchableOpacity>
			<TouchableOpacity
				// disabled={stateHasChanged}
				onPress={setShowModal ? () => setShowModal("save") : () => {}}
				style={styles.icon}
			>
				<DisketteIcon />
			</TouchableOpacity>
		</View>
	);
};

export default EditorRightIcon;
