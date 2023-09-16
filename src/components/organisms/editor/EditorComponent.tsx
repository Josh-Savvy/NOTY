import React, { useEffect, useRef, useState } from "react";
import { KeyboardAvoidingView, StyleSheet } from "react-native";
import {
	IEditorComponent,
	IEditorTitleInputRef,
} from "../../../../interfaces/editor.interface";
import CustomPromptModal from "../../common/modals";
import ScreenLayout from "../../layouts/ScreenLayout";
import ContentArea from "./ContentArea";
import TitleInput from "./TitleInput";
import EditorRightIcon from "./EditorRightIcon";

export type ModalPrompt = "save" | "discard" | "delete" | false;

export default function EditorComponent({
	navigation,
	state,
	updateState,
	handleSave,
}: IEditorComponent) {
	const [editMode, setEditMode] = useState<boolean>(false);
	const [showModal, setShowModal] = useState<ModalPrompt>(false);
	const [showEditHelp, setShowEditHelp] = useState<boolean>(false);
	const titleRef = useRef<IEditorTitleInputRef>(null);

	const handleEditMode = () => {
		setEditMode(!editMode);
		setShowEditHelp(false);
		setTimeout(function () {
			titleRef.current?.toggleFocus();
		}, 100);
	};

	useEffect(() => {
		if (showEditHelp)
			setTimeout(() => {
				setShowEditHelp(false);
			}, 1000);
	}, [showEditHelp]);

	return (
		<ScreenLayout
			navigation={navigation}
			handleGoBackNavigation={() => {
				navigation.goBack();
			}}
			showBackIcon
			rightIcon={
				<EditorRightIcon
					stateHasNotChanged={state === null || !state}
					styles={styles}
					editMode={editMode}
					handleEditMode={handleEditMode}
					setShowModal={state.title || state.content ? setShowModal : null}
					showEditHelp={showEditHelp}
					showModal={showModal}
				/>
			}
		>
			<KeyboardAvoidingView
				behavior={"padding"}
				style={{ height: "100%", gap: 10 }}
			>
				<TitleInput
					onPressIn={() => {
						if (!editMode) {
							setShowEditHelp(true);
						}
					}}
					ref={titleRef}
					editable={editMode}
					value={state.title}
					update={{
						updateValue: (value) => {
							updateState({
								...state,
								title: value,
							});
						},
					}}
				/>
				<ContentArea
					onPressIn={() => {
						if (!editMode) {
							setShowEditHelp(true);
						}
					}}
					editable={editMode}
					value={state.content}
					update={{
						updateValue: (value) => {
							updateState({
								...state,
								content: value,
							});
						},
					}}
				/>
			</KeyboardAvoidingView>
			{showModal === "save" ? (
				<CustomPromptModal
					isModalVisible={showModal === "save"}
					closeModal={() => {
						setEditMode(false);
						setShowModal(false);
					}}
					promptText="Save Changes ?"
					next={() => {
						handleSave();
						setEditMode(false);
						setShowModal(false);
					}}
					cancel={() => {
						setShowModal(false);
					}}
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
