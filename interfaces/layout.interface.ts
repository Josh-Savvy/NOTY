import { RootStackParamList } from "./navigation";

export default interface IScreenLayout {
	children: React.ReactNode;
	showBackIcon?: boolean;
	screenTitle?: string;
	rightIcon?: any;
	navigation?: INavigation;
	handleGoBackNavigation?: () => void;
}
export interface INavigation {
	navigate: (screen: keyof RootStackParamList) => void;
	back: () => void;
}
