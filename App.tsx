import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View className='bg-slate-300'>
      <View className='mt-20'>
        <Text className="mt-20 px-2 ">Open up App.tsx to start working on your app!</Text>
      </View>
      <StatusBar style="auto" /> 
    </View>
  );
}

