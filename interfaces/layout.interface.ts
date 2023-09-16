import { ViewStyle } from "react-native";
import { RootStackParamList } from "./navigation";

export default interface IScreenLayout {
	children: React.ReactNode;
	showBackIcon?: boolean;
	screenTitle?: string;
	rightIcon?: any;
	navigation: any;
	handleGoBackNavigation?: () => void;
	childrenStyles?: ViewStyle;
}
export interface INavigation {
	navigate: (screen: keyof RootStackParamList) => void;
	goBack: () => void;
}
