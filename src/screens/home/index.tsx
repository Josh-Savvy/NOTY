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
} from "react-native";
import NoteHighlightCard from "../../components/organisms/home/NoteHighlightCard";
import ScreenLayout from "../../components/layouts/ScreenLayout";
import { StyleSheet } from "react-native";
import { currentTheme } from "../../../constants/theme.constant";
import { InfoIcon, PlusIcon, SearchIcon } from "../../components/icons";
import { IEditorState } from "../../../interfaces/editor.interface";
import { loadNotes } from "../../libs/utils";
import { SwipeListView, SwipeRow } from "react-native-swipe-list-view";
import DeleteItemButton from "../../components/organisms/home/DeleteItemButton";
import CustomPromptModal from "../../components/common/modals";

const { width, height } = Dimensions.get("window");

export default function HomeScreen({ navigation }: any) {
	const theme = useColorScheme();
	const [notes, setNotes] = useState<IEditorState[]>([]);
	const [showConfirmModal, setShowConfirmModal] = useState<boolean>(false);
	const [refreshing, setRefreshing] = useState<boolean>(false);
	const swipeListViewRef = useRef<SwipeListView<IEditorState> | null>(null);

	useEffect(() => {
		loadNotes({ notes, setNotes });
	}, []);

	const deleteItem = (itemId: string) => {
		console.log("Item", itemId, "deleted!");
		setShowConfirmModal(false);
		if (swipeListViewRef.current) swipeListViewRef.current.closeAllOpenRows();
		handleRefresh();
	};

	const handleRefresh = () => {
		setRefreshing(true);
		loadNotes({ notes, setNotes }, () =>
			setTimeout(() => {
				setRefreshing(false);
			}, 2000),
		);
	};

	useEffect(() => {
		if (refreshing) handleRefresh();
	}, [refreshing]);

	return (
		<ScreenLayout>
			<View>
				<View style={styles(theme).header}>
					<Text style={styles(theme).headerText}>Notes</Text>
					<View style={styles(theme).headerIconsContainer}>
						<TouchableOpacity style={styles(theme).icon}>
							<SearchIcon />
						</TouchableOpacity>
						<TouchableOpacity style={styles(theme).icon}>
							<InfoIcon />
						</TouchableOpacity>
					</View>
				</View>
				<View style={{ minHeight: height }}>
					{notes.length > 0 ? (
						<SwipeListView
							ref={swipeListViewRef}
							data={notes}
							showsHorizontalScrollIndicator={false}
							showsVerticalScrollIndicator={false}
							scrollEnabled
							contentContainerStyle={{ gap: 25, marginTop: 40 }}
							renderItem={({ index, item }) => {
								return <NoteHighlightCard note={item} key={index} />;
							}}
							renderHiddenItem={({ index, item }, rowMap) => {
								return (
									<>
										<DeleteItemButton deleteItem={() => setShowConfirmModal(true)} />
										{showConfirmModal ? (
											<CustomPromptModal
												iconColor="#d311198A"
												isModalVisible={showConfirmModal}
												closeModal={() => setShowConfirmModal(false)}
												next={() => {
													if (swipeListViewRef.current)
														swipeListViewRef.current.closeAllOpenRows();
													setShowConfirmModal(false);
												}}
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
									tintColor="#fff"
								/>
							}
						/>
					) : (
						<View>
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
								children="Create your first note !"
								style={{
									alignSelf: "center",
									color: currentTheme(theme).primary,
									fontSize: 20,
									top: -110,
								}}
							/>
						</View>
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
