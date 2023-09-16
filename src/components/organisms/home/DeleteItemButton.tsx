import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { DeleteIcon } from "../../icons";

const DeleteItemButton = ({ deleteItem }: { deleteItem: any }) => {
	return (
		<View
			style={{
				flexDirection: "row",
				justifyContent: "space-between",
				alignItems: "center",
				alignContent: "center",
				top: 2,
			}}
		>
			<TouchableOpacity
				onPress={deleteItem}
				style={{
					backgroundColor: "#d31119",
					padding: 13,
					borderRadius: 5,
					left: 10,
				}}
			>
				<DeleteIcon />
			</TouchableOpacity>
			<TouchableOpacity
				onPress={deleteItem}
				style={{
					backgroundColor: "#d31119",
					padding: 13,
					borderRadius: 5,
					right: 10,
				}}
			>
				<DeleteIcon />
			</TouchableOpacity>
		</View>
	);
};

export default DeleteItemButton;
