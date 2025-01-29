import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from "react-native";
import { useRouter } from "expo-router";
import Button from "../../components/Button";
import CustomTextInput from "../../components/CustomTextInput";
const SignIn =  () => {
	const router = useRouter();

	return (
		<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} className="flex-1 justify-center bg-background items-center px-6">
			{/* Welcome Text */}
			<Text className="text-4xl font-extrabold text-primary mb-6 text-center">Hello, Welcome!</Text>

			<View className="w-full p-6">
				{/* Input Fields */}
				<CustomTextInput placeholder="Email" />
				<CustomTextInput placeholder="Password" secureTextEntry={true} />

				{/* Sign In Button */}
				<Button title="Sign In" style="w-full bg-primary mb-4" onPress={() => {}} />

				{/* Sign Up Link */}
				<TouchableOpacity onPress={() => router.push("/sign-up")}>
					<Text className="text-accent text-center text-lg font-medium">Don't have an account? Sign Up</Text>
				</TouchableOpacity>
			</View>
		</KeyboardAvoidingView>
	);
}
export default SignIn;