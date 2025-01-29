import { View, Text, KeyboardAvoidingView, Platform } from "react-native";
import { useRouter } from "expo-router";
import Button from "../../components/Button";
import CustomTextInput from "../../components/CustomTextInput";
import { useState } from "react";

export default function SignUp() {
	const router = useRouter();
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} className="flex-1 bg-background justify-center items-center px-6">
			{/* Welcome Text */}
			<Text className="text-4xl font-extrabold text-primary mb-6 text-center">Create an Account</Text>

			<View className="w-full p-6">
				{/* Input Fields */}
				<CustomTextInput placeholder="Username" value={username} onChangeText={setUsername} />
				<CustomTextInput placeholder="Email" value={email} onChangeText={setEmail} />
				<CustomTextInput placeholder="Password" secureTextEntry value={password} onChangeText={setPassword} />

				{/* Sign Up Button */}
				<Button title="Sign Up" onPress={() => {}} style="bg-primary" />

				{/* Sign In Link */}
				<Text onPress={() => router.push("/sign-in")} className="text-accent text-center text-lg font-medium mt-4">
					Already have an account? Sign In
				</Text>
			</View>
		</KeyboardAvoidingView>
	);
}
