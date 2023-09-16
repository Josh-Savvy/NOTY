import React, { useEffect, useRef, useState } from "react";
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
import {
	IEditorState,
	IEditorTitleInputRef,
} from "../../../interfaces/editor.interface";
import CustomPromptModal from "../../components/common/modals";
import { INavigation } from "../../../interfaces/layout.interface";
import EditorComponent from "../../components/organisms/editor/EditorComponent";
import {
	generateUUID,
	loadNotes,
	saveNote,
	updateNote,
} from "../../libs/utils";

export default function EditorScreen({ navigation }: any) {
	let initialState: IEditorState = {
		id: generateUUID(),
		title: "",
		content: "",
	};
	const [state, setState] = useState<IEditorState>(initialState);
	const [formerState, setFormerState] = useState<IEditorState | null>(null);
	const [savedNotes, setSavedNotes] = useState<IEditorState[]>([]);

	useEffect(() => {
		if (state.id === "") setState({ ...state, id: generateUUID() });
		console.log("mainstate: ", state);
	}, [state]);

	useEffect(() => {
		loadNotes({ notes: savedNotes, setNotes: setSavedNotes });
		// return () => fetchAndSetFormerState();
	}, []);

	return (
		<EditorComponent
			updateState={setState}
			state={state}
			navigation={navigation}
			formerState={formerState ? formerState : null}
			handleSave={() => {
				const existingNote = savedNotes.find((note) =>
					note.title.includes(state.title),
				);
				if (state.content || state.title)
					if (existingNote)
						updateNote({
							item: existingNote,
							notes: savedNotes,
							setNotes: setSavedNotes,
						});
				saveNote({ item: state, notes: savedNotes, setNotes: setSavedNotes });
			}}
		/>
	);
}
