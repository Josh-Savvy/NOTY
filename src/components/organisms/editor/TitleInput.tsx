import React, { forwardRef, useImperativeHandle, useState } from "react";
import {
	View,
	Text,
	TextInput,
	StyleSheet,
	ColorSchemeName,
	useColorScheme,
} from "react-native";
import { currentTheme } from "../../../../constants/theme.constant";
import { IEditorTitleInputProps } from "../../../../interfaces/editor.interface";

const TitleInput = forwardRef(
	(props: IEditorTitleInputProps, ref): JSX.Element => {
		const theme = useColorScheme();
		const [title, setTitle] = useState<string>("");
		const textInputRef = React.createRef<TextInput>();

		useImperativeHandle(ref, () => ({
			setTitle: (newTitle: string) => {
				setTitle(newTitle);
			},
			toggleFocus: () => {
				textInputRef?.current?.isFocused()
					? textInputRef?.current?.blur()
					: textInputRef?.current?.focus();
			},
		}));
		return (
			<TextInput
				ref={textInputRef}
				placeholder="Title"
				placeholderTextColor="#9A9A9A"
				style={styles(theme).textInput}
				maxLength={40}
				multiline
				numberOfLines={3}
				value={title}
				onChangeText={(text) => setTitle(text)}
				{...props}
			/>
		);
	},
);
const styles = (theme: ColorSchemeName) =>
	StyleSheet.create({
		textInput: {
			fontSize: 60,
			fontWeight: "400",
			color: currentTheme(theme).primary,
			borderBottomWidth: 1,
			borderBottomColor: "#9A9A9A",
			paddingBottom: 10,
		},
	});

export default TitleInput;
