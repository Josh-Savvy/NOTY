import { TextInput, TextInputProps } from "react-native";

export interface IEditorTitleInputProps extends TextInputProps {
	ref?: any;
}
export interface IEditorTitleInputRef {
	setTitle: (newTitle: string) => void;
	toggleFocus: () => void;
	current?: TextInput | null;
}

export interface IEditorContentAreaProps extends TextInputProps {
	ref?: any;
}
export interface IEditorContentAreaRef {
	setContent: (newTitle: string) => void;
	toggleFocus: () => void;
	current?: TextInput | null;
}

