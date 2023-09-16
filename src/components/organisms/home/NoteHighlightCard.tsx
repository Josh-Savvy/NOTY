import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import { IEditorState } from "../../../../interfaces/editor.interface";
import { generateRandomHexColor } from "../../../libs/utils";

export default function NoteHighlightCard({ note }: { note: IEditorState }) {
	const [backgroundColor, setBackgroundColor] = useState(
		generateRandomHexColor(),
	);

	return (
		<TouchableOpacity
			activeOpacity={1}
			// onPress={() => console.log("helloƒ")}
			style={{
				padding: 20,
				backgroundColor,
				borderRadius: 10,
			}}
		>
			<Text style={{ color: "black", fontSize: 20, fontWeight: "500" }}>
				{note.title}
			</Text>
		</TouchableOpacity>
	);
}
