import React, { useEffect, useState } from "react";
import { View, Text, Dimensions } from "react-native";
import ScreenLayout from "../../components/layouts/ScreenLayout";
import { filterNotesBySearch, loadNotes } from "../../libs/utils";
import { IEditorState } from "../../../interfaces/editor.interface";
import { TextInput } from "react-native";
import { StyleSheet } from "react-native";
import { CloseIcon } from "../../components/icons";
import { TouchableOpacity } from "react-native";
import { FlatList } from "react-native";
import NoteHighlightCard from "../../components/organisms/home/NoteHighlightCard";
import { ActivityIndicator } from "react-native";
import { Image } from "react-native";
import { currentTheme } from "../../../constants/theme.constant";
import { useColorScheme } from "react-native";

const { height, width } = Dimensions.get("window");

export default function SearchScreen({ navigation }: any) {
	const theme = useColorScheme();
	const [searchQuery, setSearchQuery] = useState<string>("");
	const [savedNotes, setSavedNotes] = useState<IEditorState[]>([]);
	const [searchResult, setSearchResult] = useState<IEditorState[]>([]);
	const [loading, setLoading] = useState<boolean>(false);

	useEffect(() => {
		loadNotes((notes) => setSavedNotes(notes));
	}, []);

	const handleSearch = (callback: () => void) => {
		setLoading(true);
		filterNotesBySearch({ notes: savedNotes, searchQuery }, (result) => {
			setSearchResult(result);
			callback();
		});
	};

	useEffect(() => {
		handleSearch(() => {
			setTimeout(function () {
				setLoading(false);
			}, 1000);
		});
	}, [searchQuery]);

	return (
		<ScreenLayout
			navigation={navigation}
			childrenStyles={
				{
					// top: -50,
				}
			}
		>
			<View style={styles.searchContainer}>
				<TextInput
					value={searchQuery}
					onChangeText={(text) => setSearchQuery(text)}
					style={{
						width: "90%",
						padding: 18,
						color: currentTheme(theme).primary,
						fontSize: 20,
					}}
					placeholder="Search by the keyword..."
					placeholderTextColor="#c4c4c4"
				/>
				<TouchableOpacity
					onPress={() => setSearchQuery("")}
					style={{ width: "10%" }}
				>
					<CloseIcon width={15} height={15} />
				</TouchableOpacity>
			</View>

			{!loading ? (
				searchResult.length ? (
					<FlatList
						data={searchResult}
						renderItem={({ index, item: note }) => (
							<NoteHighlightCard
								key={index}
								note={note}
								onPress={() => navigation.navigate("EditorScreen", { noteId: note.id })}
							/>
						)}
						contentContainerStyle={{ top: 20, gap: 10, minHeight: height }}
					/>
				) : (
					<>
						<Text
							children="File not found. Try searching again."
							style={{
								alignSelf: "center",
								color: currentTheme(theme).primary,
								fontSize: 20,
								top: 120,
							}}
						/>
						<Image
							style={{
								width: width * 0.8,
								alignSelf: "center",
								height: height * 0.6,
							}}
							resizeMode="contain"
							source={require("../../../assets/search/search_not_found.png")}
						/>
					</>
				)
			) : searchQuery === "" ? null : ( // </Text> // 	Enter your search query // <Text style={{ top: 20, color: "#fff", alignSelf: "center" }}>
				<ActivityIndicator color={"#ffffff"} size={50} />
			)}
		</ScreenLayout>
	);
}

const styles = StyleSheet.create({
	searchContainer: {
		backgroundColor: "#3B3B3B",
		borderRadius: 50,
		width: "100%",
		maxWidth: "100%",
		alignSelf: "center",
		flexDirection: "row",
		justifyContent: "space-between",
		alignContent: "center",
		alignItems: "center",
	},
});
