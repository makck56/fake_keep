/*
 * @Description: description
 * @Date: 2022-01-15 13:29:49
 * @LastEditors: maicq
 * @LastEditTime: 2022-01-15 15:05:32
 */
import React, {useState} from 'react'
import {StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native'
import {colorVars} from '../../../styles/var'
const DateTabs = () => {
  const [activeTab, setActiveTab] = useState(1)
  function getTabTextStyle(idx: number) {
    return {
      color: activeTab === idx ? colorVars.TextColor3 : 'white'
    }
  }
  return (
    <View style={styles.tabs}>
      <View style={styles.tabItem}>
        <TouchableWithoutFeedback onPress={() => setActiveTab(1)}>
          <Text style={{...styles.tabItemText, ...getTabTextStyle(1)}}>日</Text>
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.tabItem}>
        <TouchableWithoutFeedback onPress={() => setActiveTab(2)}>
          <Text style={{...styles.tabItemText, ...getTabTextStyle(2)}}>周</Text>
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.tabItem}>
        <TouchableWithoutFeedback onPress={() => setActiveTab(3)}>
          <Text style={{...styles.tabItemText, ...getTabTextStyle(3)}}>月</Text>
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.tabItem}>
        <TouchableWithoutFeedback onPress={() => setActiveTab(4)}>
          <Text style={{...styles.tabItemText, ...getTabTextStyle(4)}}>总</Text>
        </TouchableWithoutFeedback>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  tabs: {
    width: '100%',
    paddingTop: 16,
    paddingBottom: 16,
    backgroundColor: '#5A4E61',
    flexDirection: 'row',
    elevation: 2
  },
  tabItem: {
    flex: 1,
    color: 'white',
    justifyContent: 'center'
  },
  tabItemText: {
    width: '100%',
    color: colorVars.TextColor3,
    fontSize: 16,
    textAlign: 'center'
  }
})
export default DateTabs
