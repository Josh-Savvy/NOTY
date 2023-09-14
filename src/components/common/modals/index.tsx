import React, { useState } from "react";
import {
	Modal,
	Text,
	View,
	TouchableOpacity,
	StyleSheet,
	Dimensions,
} from "react-native";
import { ICustomModalProps } from "../../../../interfaces/modal.interface";
import { WarningIcon } from "../../icons";

export default function CustomPromptModal(props: ICustomModalProps) {
	const { isModalVisible, setModalVisible } = props;
	const toggleModal = () => {
		setModalVisible(!isModalVisible);
	};

	return (
		<TouchableOpacity
			activeOpacity={0}
			onPress={() => setModalVisible(false)}
			style={styles.container}
		>
			<Modal
				transparent={true}
				visible={isModalVisible}
				animationType="fade"
				onRequestClose={toggleModal}
			>
				<View style={styles.modalBackground}>
					<View style={styles.modalContentContainer}>
						<WarningIcon style={{ alignSelf: "center" }} height={40} width={40} />
						<Text
							style={[styles.modalContent, { fontSize: props.promptTextSize || 20 }]}
						>
							{props.promptText}
						</Text>
						<View style={styles.modalButtonsContainer}>
							<TouchableOpacity
								style={[styles.modalButtons, { backgroundColor: "#d31119" }]}
								onPress={toggleModal}
							>
								<Text style={styles.modalButtonsText}>Discard</Text>
							</TouchableOpacity>
							<TouchableOpacity
								style={[styles.modalButtons, { backgroundColor: "#30BE71" }]}
								onPress={toggleModal}
							>
								<Text style={styles.modalButtonsText}>Save</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</Modal>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	modalBackground: {
		flex: 1,
		backgroundColor: "rgba(0, 0, 0, 0.5)",
		justifyContent: "center",
		alignItems: "center",
	},
	modalContentContainer: {
		backgroundColor: "#000",
		borderRadius: 10,
		height: Dimensions.get("window").height / 3.5,
		width: Dimensions.get("window").width * 0.8,
		paddingVertical: 20,
		alignContent: "center",
		alignItems: "center",
		flexDirection: "column",
		gap: 25,
	},
	modalContent: {
		color: "#fff",
		paddingHorizontal: 10,
		alignSelf: "center",
		textAlign: "center",
	},
	modalButtonsContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		width: "100%",
		paddingHorizontal: 20,
		bottom: 25,
		position: "absolute",
	},
	modalButtons: {
		padding: 15,
		width: "46%",
		borderRadius: 5,
		alignContent: "center",
		alignItems: "center",
	},
	modalButtonsText: {
		color: "#fff",
		fontSize: 16,
	},
});
