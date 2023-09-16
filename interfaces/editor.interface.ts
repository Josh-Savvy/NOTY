import { TextInput, TextInputProps } from "react-native";
import { INavigation } from "./layout.interface";
import { Dispatch, SetStateAction } from "react";

export interface IEditorTitleInputProps extends TextInputProps {
	textSize?: number;
	update?: { updateValue: (oldValue: string) => void };
}
export interface IEditorTitleInputRef {
	setTitle: (newTitle: string) => void;
	toggleFocus: () => void;
	current?: TextInput | null;
}

export interface IEditorContentAreaProps extends TextInputProps {
	textSize?: number;
	update?: { updateValue: (oldValue: string) => void };
}
export interface IEditorContentAreaRef {
	setContent: (newTitle: string) => void;
	toggleFocus: () => void;
	current?: TextInput | null;
}

export interface IEditorState {
	id: string;
	title: string;
	content: string;
}

export interface IEditorComponent {
	navigation: INavigation;
	state: IEditorState;
	updateState: Dispatch<SetStateAction<IEditorState>>;
	handleSave: () => void;
}
