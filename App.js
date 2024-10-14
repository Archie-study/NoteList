import React from 'react'
import 'react-native-gesture-handler'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import MainNavigator from './src/navigator/MainNavigator'
// import HelloScreen from './src/screens/HelloScreen'
// import TryCodeScreen from './src/screens/TryCodeScreen'

const App = () => {
  return (
    <SafeAreaProvider>
      <MainNavigator />
      {/* <TryCodeScreen /> */}
    </SafeAreaProvider>
  )
}

export default App