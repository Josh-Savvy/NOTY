import React, { useEffect, useState } from "react";
import { IEditorState } from "../../../interfaces/editor.interface";
import EditorComponent from "../../components/organisms/editor/EditorComponent";
import {
	generateUUID,
	loadNotes,
	saveNote,
	updateNote,
} from "../../libs/utils";
import { useRoute, RouteProp } from "@react-navigation/native";

export default function EditorScreen({ navigation }: any) {
	const route =
		useRoute<RouteProp<Record<string, { noteId: string }>, string>>();
	const { noteId } = route.params || {};
	let initialState: IEditorState = {
		id: generateUUID(),
		title: "",
		content: "",
	};
	const [state, setState] = useState<IEditorState>(initialState);

	useEffect(() => {
		if (state.id === "") setState({ ...state, id: generateUUID() });
	}, [state]);

	useEffect(() => {
		loadNotes((notes) => {
			if (noteId) setState(notes.filter((note) => note.id === noteId)[0]);
		});
	}, [noteId]);

	return (
		<EditorComponent
			updateState={setState}
			state={state}
			navigation={navigation}
			handleSave={() => {
				if (noteId)
					updateNote({
						item: state,
					});
				else if (state !== initialState) saveNote({ item: state });
			}}
		/>
	);
}
