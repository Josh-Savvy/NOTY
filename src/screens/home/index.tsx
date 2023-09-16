import React, { useEffect, useRef, useState } from "react";
import {
	View,
	Text,
	Dimensions,
	useColorScheme,
	ColorSchemeName,
	TouchableOpacity,
	Image,
	RefreshControl,
	ScrollView,
	ActivityIndicator,
} from "react-native";
import NoteHighlightCard from "../../components/organisms/home/NoteHighlightCard";
import ScreenLayout from "../../components/layouts/ScreenLayout";
import { StyleSheet } from "react-native";
import { currentTheme } from "../../../constants/theme.constant";
import { InfoIcon, PlusIcon, SearchIcon } from "../../components/icons";
import { IEditorState } from "../../../interfaces/editor.interface";
import { deleteNote, loadNotes } from "../../libs/utils";
import { SwipeListView, SwipeRow } from "react-native-swipe-list-view";
import DeleteItemButton from "../../components/organisms/home/DeleteItemButton";
import CustomPromptModal from "../../components/common/modals";

const { width, height } = Dimensions.get("window");

export default function HomeScreen({ navigation }: any) {
	const theme = useColorScheme();
	const [notes, setNotes] = useState<IEditorState[]>([]);
	const [showConfirmModal, setShowConfirmModal] = useState<boolean>(false);
	const [refreshing, setRefreshing] = useState<boolean>(false);
	const [initialLoading, setInitialLoading] = useState<boolean>(true);

	useEffect(() => {
		loadNotes((result) => {
			setNotes(result);
			// console.log("Notes loaded initially");
			setTimeout(function () {
				setInitialLoading(false);
			}, 2000);
		});
	}, []);

	const checkUpdate = () => {
		// console.log("Checking for updates...");
		loadNotes((result) => {
			setNotes(result);
			// console.log("Notes updated!");
		});
		setRefreshing(false);
	};

	useEffect(() => {
		const timer = setInterval(checkUpdate, 1000);
		return () => clearInterval(timer);
	}, []);

	const handleRefresh = () => {
		setRefreshing(true);
		loadNotes(() =>
			setTimeout(function () {
				setRefreshing(false);
			}, 1000),
		);
	};

	useEffect(() => {
		if (refreshing) handleRefresh();
	}, [refreshing]);

	const deleteItem = (itemId: string) => {
		console.log("Item", itemId, "deleted!");
		setShowConfirmModal(false);
		deleteNote(
			{
				item: notes.filter((note) => note.id === itemId)[0],
			},
			handleRefresh,
		);
	};

	return (
		<ScreenLayout navigation={navigation}>
			<View>
				<View style={styles(theme).header}>
					<Text style={styles(theme).headerText}>Noty</Text>
					<View style={styles(theme).headerIconsContainer}>
						<TouchableOpacity
							style={styles(theme).icon}
							onPress={() =>
								navigation.navigate("SearchScreen", { presentation: "modal" })
							}
						>
							<SearchIcon />
						</TouchableOpacity>
						<TouchableOpacity style={styles(theme).icon}>
							<InfoIcon />
						</TouchableOpacity>
					</View>
				</View>
				<View style={{ minHeight: height }}>
					{initialLoading ? (
						<ActivityIndicator style={{ top: 20 }} size={100} color={"#fff"} />
					) : notes.length > 0 ? (
						<SwipeListView
							data={notes}
							showsHorizontalScrollIndicator={false}
							showsVerticalScrollIndicator={false}
							scrollEnabled
							contentContainerStyle={{ gap: 25, marginTop: 40 }}
							renderItem={({ index, item }) => {
								return (
									<NoteHighlightCard
										onPress={() =>
											navigation.navigate("EditorScreen", { noteId: item.id })
										}
										note={item}
										key={index}
									/>
								);
							}}
							keyExtractor={(item) => `key_${item.id.toString()}`}
							renderHiddenItem={({ item }) => {
								return (
									<>
										<DeleteItemButton deleteItem={() => setShowConfirmModal(true)} />
										{showConfirmModal ? (
											<CustomPromptModal
												iconColor="#d311198A"
												isModalVisible={showConfirmModal}
												closeModal={() => setShowConfirmModal(false)}
												next={() => setShowConfirmModal(false)}
												cancel={() => deleteItem(item.id)}
												nextText="Keep"
												cancelText="Delete"
												promptText={`Delete this item?\n Note: This action can't be undone`}
											/>
										) : null}
									</>
								);
							}}
							leftOpenValue={75}
							rightOpenValue={-75}
							refreshControl={
								<RefreshControl
									refreshing={refreshing}
									onRefresh={() => setRefreshing(true)}
									tintColor="#ffffff"
								/>
							}
						/>
					) : (
						<ScrollView>
							<RefreshControl
								refreshing={refreshing}
								onRefresh={() => setRefreshing(true)}
								tintColor="#ffffff"
							/>
							<Image
								style={{
									width: width * 0.8,
									alignSelf: "center",
									height: height * 0.6,
								}}
								resizeMode="contain"
								source={require("../../../assets/home/illustration_1.png")}
							/>
							<Text
								children="Pull down to refresh or Create your first note!"
								style={{
									alignSelf: "center",
									color: currentTheme(theme).primary,
									fontSize: 20,
									top: -110,
								}}
							/>
						</ScrollView>
					)}
					<TouchableOpacity
						onPress={() => navigation.navigate("EditorScreen")}
						activeOpacity={0.6}
						style={styles(theme).addButton}
					>
						<PlusIcon height={30} width={30} />
					</TouchableOpacity>
				</View>
			</View>
		</ScreenLayout>
	);
}

const styles = (theme: ColorSchemeName) =>
	StyleSheet.create({
		header: {
			flexDirection: "row",
			alignContent: "center",
			alignItems: "center",
			display: "flex",
			justifyContent: "space-between",
		},
		headerText: {
			color: currentTheme(theme).primary,
			fontSize: 40,
			fontVariant: ["small-caps"],
		},
		headerIconsContainer: {
			flexDirection: "row",
			alignContent: "center",
			alignItems: "center",
			gap: 10,
		},
		icon: {
			backgroundColor: "#3B3B3B",
			padding: 15,
			alignContent: "center",
			alignItems: "center",
			alignSelf: "center",
			borderRadius: 10,
		},
		addButton: {
			borderRadius: 50,
			padding: 20,
			backgroundColor: "#222",
			position: "absolute",
			shadowColor: "#000",
			shadowOffset: {
				height: 5,
				width: 5,
			},
			shadowOpacity: 3,
			shadowRadius: 20,
			top: height * 0.68,
			right: 0,
		},
	});
