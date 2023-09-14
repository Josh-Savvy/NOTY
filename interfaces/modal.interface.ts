export interface ICustomModalProps {
	setModalVisible: (isModalVisible: boolean) => void;
	isModalVisible: boolean;
	promptText: string;
	promptTextSize?: number;
}
