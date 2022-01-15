/*
 * @Description: description
 * @Date: 2022-01-02 13:34:00
 * @LastEditors: maicq
 * @LastEditTime: 2022-01-15 18:08:10
 */
import React, {useState} from 'react'
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native'
import Svg, {Circle} from 'react-native-svg'
import {colorVars} from '../../styles/var'
import {Header, SportList, SportDetail, DateTabs} from './components'
const Detail = () => {
  const [dashArrayStart, setDashArrayStart] = useState(0)
  return (
    <View>
      <Header />
      <SafeAreaView>
        <ScrollView>
          <DateTabs />
          <View style={styles.sportDayStats}>
            <Text style={styles.title}>连续运动天数</Text>
            <Svg width="100%" height={180}>
              <Circle
                cx="50%"
                cy="50%"
                r="60"
                stroke="#52676A"
                strokeWidth={28}
                fill="none"
              />
              <Circle
                cx="50%"
                cy="50%"
                r="60"
                stroke="#3FC787"
                strokeWidth={28}
                strokeLinecap="round"
                strokeDasharray={[dashArrayStart, Math.PI * 2 * 60]}
                strokeDashoffset={90}
                fill="none"
              />
            </Svg>
          </View>
          <View style={styles.pageContent}>
            <View style={styles.overview}>
              <View style={styles.overviewHeader}>
                <Text style={styles.overviewText}>你累计运动时长</Text>
                <Text style={styles.overviewText}>(分钟)</Text>
              </View>
              <View style={styles.sportTimeWrapper}>
                <View>
                  <Text style={styles.sportTimeText}>2205</Text>
                </View>
              </View>
              <SportDetail />
            </View>
            <SportList
              data={[
                {date: '11月10日', icon: '', desc: '运动3676步'},
                {date: '11月10日', icon: '', desc: '运动3676步'},
                {date: '11月10日', icon: '', desc: '运动3676步'}
              ]}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  )
}
const styles = StyleSheet.create({
  pageContent: {
    padding: 16
  },
  sportDayStats: {
    padding: 14,
    backgroundColor: '#5A4E61'
  },
  title: {
    color: colorVars.TextColor3
  },
  chart: {
    width: '100%',
    height: 100
  },
  overview: {
    paddingBottom: 40
  },
  overviewHeader: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  overviewText: {
    color: colorVars.TextColor3
  },
  sportTimeWrapper: {
    flex: 1,
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center'
  },
  sportTimeText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#585065'
  }
})
export default Detail
