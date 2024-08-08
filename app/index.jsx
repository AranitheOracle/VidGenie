import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import {Text, View } from 'react-native';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text>Hello To the App</Text>
      <StatusBar style="auto" />
      <Link href="/home" style={{color:'blue'}}>Home</Link>
    </View>
  );
}
