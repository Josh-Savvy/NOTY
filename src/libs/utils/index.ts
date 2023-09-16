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

export const loadNotes = (callback: (notes: IEditorState[]) => void): void => {
	AsyncStorage.getItem(notesDataKey)
		.then((savedNotes) => {
			if (savedNotes) {
				const parsedNotes: IEditorState[] = JSON.parse(savedNotes);
				callback(parsedNotes);
			}
		})
		.catch((err) => {
			console.error("Error getting saved notes: ", err);
		});
};

export const saveNote = (
	props: { item: IEditorState },
	callback?: (item: IEditorState) => void,
): void => {
	const { item } = props;
	loadNotes((notes) => {
		const newNotes: IEditorState[] = [...notes, item];
		AsyncStorage.setItem(notesDataKey, JSON.stringify(newNotes))
			.then(() => {
				console.log(`Note ${item.id} has been saved`);
				callback ? callback(item) : null;
			})
			.catch((err) => {
				console.error("Error saving note: ", err);
			});
	});
};

export const updateNote = (
	props: {
		item: IEditorState;
	},
	callback?: (updatedNotes: IEditorState[]) => void,
): void => {
	const { item } = props;
	loadNotes((notes) => {
		const updatedNotes = notes.map((note) => (note.id === item.id ? item : note));
		AsyncStorage.setItem(notesDataKey, JSON.stringify(updatedNotes))
			.then(() => {
				console.log(`Note ${item.id} has been updated`);
				callback ? callback(updatedNotes) : null;
			})
			.catch((err) => {
				console.error("Error updating note: ", err);
			});
	});
};

export const deleteNote = (
	props: {
		item: IEditorState;
	},
	callback?: (updatedNotes: IEditorState[]) => void,
): void => {
	const { item } = props;
	loadNotes((notes) => {
		const updatedNotes = notes.filter((note) => note.id !== item.id);
		AsyncStorage.setItem(notesDataKey, JSON.stringify(updatedNotes))
			.then(() => {
				console.log(`Note ${item.id} has been updated`);
				callback ? callback(updatedNotes) : null;
			})
			.catch((err) => {
				console.error("Error updating note: ", err);
			});
	});
};

export const filterNotesBySearch = (
	props: {
		notes: IEditorState[];
		searchQuery: string;
	},
	callback?: (result: IEditorState[]) => void,
): void | null => {
	const { notes, searchQuery } = props;
	if (!searchQuery) {
		return null;
	}
	const normalizedSearchQuery = searchQuery.toLowerCase().trim();
	callback
		? callback(
				notes.filter((note: IEditorState) => {
					const normalizedTitle = note.title.trim().toLowerCase();
					const normalizedContent = note.content.trim().toLowerCase();
					return (
						normalizedTitle.includes(normalizedSearchQuery) ||
						normalizedContent.includes(normalizedSearchQuery)
					);
				}),
		  )
		: null;
};
