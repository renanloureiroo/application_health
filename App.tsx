import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { HomeScreen } from './app/screens/Home'

import { SafeAreaProvider } from 'react-native-safe-area-context'

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style="dark" backgroundColor="transparent" translucent />
      <HomeScreen />
    </SafeAreaProvider>
  )
}
