import { TextInput } from 'react-native';

export default function CustomTextInput({ placeholder, secureTextEntry = false, value, onChangeText, style = '' }) {
  return (
    <TextInput
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      value={value}
      onChangeText={onChangeText}
      className={`w-full bg-background p-4 rounded-lg mb-4 border border-gray-300 text-lg text-text ${style}`}
    />
  );
}