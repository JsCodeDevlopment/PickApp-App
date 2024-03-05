import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import "./main.css"

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-slate-900">
      <Text className='text-2xl'>PickApp - App</Text>
      <Text className='text-2xl'>This is my app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
