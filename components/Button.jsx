import { TouchableOpacity, Text } from 'react-native';

export default function CustomButton({ title, onPress, style = '', textStyle = '' }) {
  return (
    <TouchableOpacity
      className={`py-3 rounded-full shadow-md ${style}`}
      onPress={onPress}
    >
      <Text className={`text-white text-center text-lg font-semibold ${textStyle}`}>{title}</Text>
    </TouchableOpacity>
  );
}
