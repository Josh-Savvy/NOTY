import React, {
	createRef,
	forwardRef,
	useEffect,
	useImperativeHandle,
	useState,
} from "react";
import {
	View,
	Text,
	ColorSchemeName,
	useColorScheme,
	StyleSheet,
	KeyboardAvoidingView,
	ScrollView,
	Dimensions,
	Keyboard,
	Modal,
} from "react-native";
import { currentTheme } from "../../../../constants/theme.constant";
import { TextInput } from "react-native";
import { Platform } from "react-native";
import { IEditorContentAreaProps } from "../../../../interfaces/editor.interface";

const ContentArea = forwardRef(
	(props: IEditorContentAreaProps, ref): JSX.Element => {
		const { update } = props;
		const theme = useColorScheme();
		useEffect(() => {
			Keyboard.isVisible() ? console.log(Keyboard.metrics()) : null;
		}, [Keyboard]);
		useImperativeHandle(ref, () => ({
			toggleFocus: () => {
				contentRef?.current?.isFocused()
					? contentRef?.current?.blur()
					: contentRef?.current?.focus();
			},
		}));
		const contentRef = createRef<TextInput>();

		return (
			<KeyboardAvoidingView
				behavior="padding"
				style={{ flex: 1 }}
				keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 0}
			>
				<TextInput
					placeholder="Type something..."
					placeholderTextColor="#9A9A9A"
					style={styles(theme).textInput}
					multiline
					onChangeText={(text) => update?.updateValue(text)}
					textBreakStrategy="simple"
					{...props}
				/>
			</KeyboardAvoidingView>
		);
	},
);

const styles = (theme: ColorSchemeName) =>
	StyleSheet.create({
		container: {
			flexGrow: 1,
			backgroundColor: "red",
		},
		textInput: {
			fontSize: 20,
			color: currentTheme(theme).primary,
			left: 6,
			minHeight: Dimensions.get("window").height / 2,
			paddingBottom: Dimensions.get("window").height / 5,
		},
	});
export default ContentArea;
