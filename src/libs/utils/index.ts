import AsyncStorage from "@react-native-async-storage/async-storage";
import { IEditorState } from "../../../interfaces/editor.interface";
import { Dispatch, SetStateAction } from "react";

export function generateUUID(): string {
	return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
		const r = (Math.random() * 16) | 0;
		const v = c === "x" ? r : (r & 0x3) | 0x8;
		return v.toString(16);
	});
}

export function generateRandomHexColor(): string {
	const red = Math.floor(Math.random() * 128) + 128;
	const green = Math.floor(Math.random() * 128) + 128;
	const blue = Math.floor(Math.random() * 128) + 128;
	const hexColor = `#${red.toString(16)}${green.toString(16)}${blue.toString(
		16,
	)}`;
	return hexColor;
}

// #Notes Util Function

var notesDataKey: string = "notes";

export const saveNote = (props: {
	notes: IEditorState[];
	item: IEditorState;
	setNotes: Dispatch<SetStateAction<IEditorState[]>>;
}) => {
	const { notes, setNotes, item } = props;
	const newNotes: IEditorState[] = [...notes, item];
	AsyncStorage.setItem(notesDataKey, JSON.stringify(newNotes))
		.then(() => {
			console.log(`Note ${item.id} has been saved`);
			setNotes(newNotes);
			// setState(initialState);
		})
		.catch((err) => {
			console.error("Error saving note: ", err);
		});
};

export const updateNote = (
	props: {
		notes: IEditorState[];
		item: IEditorState;
		setNotes: Dispatch<SetStateAction<IEditorState[]>>;
	},
	next?: () => void,
) => {
	const { notes, setNotes, item } = props;
	const updatedNotes = notes.map((note) => (note.id === item.id ? item : note));
	AsyncStorage.setItem(notesDataKey, JSON.stringify(updatedNotes))
		.then(() => {
			setNotes(updatedNotes);
			console.log(`Note ${item.id} has been updated`);
			// setState(initialState);
			next ? next() : null;
		})
		.catch((err) => {
			console.error("Error updating note: ", err);
		});
};

export const loadNotes = (
	props: {
		notes: IEditorState[];
		setNotes: Dispatch<SetStateAction<IEditorState[]>>;
	},
	next?: () => void,
) => {
	const { notes, setNotes } = props;
	AsyncStorage.getItem(notesDataKey)
		.then((savedNotes) => {
			if (savedNotes) {
				const parsedNotes: IEditorState[] = JSON.parse(savedNotes);
				setNotes(parsedNotes);
				next ? next() : null;
				// console.log("savedNotes: ", parsedNotes);
			}
		})
		.catch((err) => {
			console.error("Error getting saved notes: ", err);
		});
};

export const deleteNote = (
	props: {
		notes: IEditorState[];
		item: IEditorState;
		setNotes: Dispatch<SetStateAction<IEditorState[]>>;
	},
	next?: () => void,
) => {
	const { notes, setNotes, item } = props;
	const updatedNotes = notes.filter((note) => note.id !== item.id);
	AsyncStorage.setItem(notesDataKey, JSON.stringify(updatedNotes))
		.then(() => {
			setNotes(updatedNotes);
			console.log(`Note ${item.id} has been deleted`);
			// setState(initialState);
			next ? next() : null;
		})
		.catch((err) => {
			console.error("Error deleting note: ", err);
		});
};
