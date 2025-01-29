import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import Button from "../components/Button";
export default function Index() {
	const router = useRouter();

	return (
		<View className="flex-1 bg-background justify-center items-center px-6">
			{/* Logo */}
			<Text className="text-5xl font-extrabold text-primary mb-6 shadow-lg text-center">BestOnlineStore</Text>

			{/* Welcome Message */}
			<Text className="text-lg text-text text-center mb-8 px-4 font-medium leading-relaxed">Manage your store efficiently with BestOnlineStore. Create invoices, track inventory, and print seamlessly!</Text>

			{/* Buttons */}

			<Button title="Sign In" style="w-11/12 bg-primary mb-4" onPress={() => router.push("/sign-in")} />
			<Button title="Sign Up" style="w-11/12 bg-secondary mb-4" onPress={() => router.push("/sign-up")} />
		</View>
	);
}
