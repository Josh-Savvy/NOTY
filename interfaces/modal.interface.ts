export interface ICustomModalProps {
	closeModal: () => void;
	isModalVisible: boolean;
	promptText: string;
	cancelText?: string;
	nextText?: string;
	iconColor?: string;
	promptTextSize?: number;
	next: (value?: any) => void;
	cancel: () => void;
}
