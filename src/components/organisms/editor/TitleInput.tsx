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
		const { update } = props;
		const theme = useColorScheme();
		const textInputRef = React.createRef<TextInput>();

		useImperativeHandle(ref, () => ({
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
				style={[
					styles(theme).textInput,
					{
						fontSize: props.textSize || 60,
					},
				]}
				maxLength={40}
				multiline
				numberOfLines={3}
				onChangeText={(text) => update?.updateValue(text)}
				{...props}
			/>
		);
	},
);
const styles = (theme: ColorSchemeName) =>
	StyleSheet.create({
		textInput: {
			fontWeight: "400",
			color: currentTheme(theme).primary,
			borderBottomWidth: 1,
			borderBottomColor: "#9A9A9A",
			paddingBottom: 10,
		},
	});

export default TitleInput;
