/*
 * @Description: description
 * @Date: 2022-01-12 15:29:14
 * @LastEditors: maicq
 * @LastEditTime: 2022-01-15 17:38:08
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react'
import {SafeAreaView, ScrollView, StatusBar, useColorScheme} from 'react-native'

import {Colors} from 'react-native/Libraries/NewAppScreen'
import Detail from './src/pages/Detail'
const App = () => {
  const isDarkMode = useColorScheme() === 'dark'

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Detail />
      </ScrollView>
    </SafeAreaView>
  )
}

export default App
