/*
 * @Description: description
 * @Date: 2022-01-13 21:40:19
 * @LastEditors: maicq
 * @LastEditTime: 2022-01-15 17:32:59
 */
import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {colorVars} from '../../../styles/var'
const exportDetail = () => {
  return (
    <View style={styles.sportDetails}>
      <View style={styles.detailItem}>
        <Text style={styles.itemTitle}>完成(次)</Text>
        <Text style={styles.itemValue}>61</Text>
      </View>
      <View style={styles.detailItem}>
        <Text style={styles.itemTitle}>累计(天)</Text>
        <Text style={styles.itemValue}>48</Text>
      </View>
      <View style={styles.detailItem}>
        <Text style={styles.itemTitle}>消耗(千卡)</Text>
        <Text style={styles.itemValue}>11851</Text>
      </View>
    </View>
  )
} 
const styles = StyleSheet.create({
  sportDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  detailItem: {},
  itemTitle: {
    width: '100%',
    color: colorVars.TextColor3,
    fontSize: 12
  },
  itemValue: {
    color: colorVars.primaryTextColor,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  }
})
export default exportDetail
