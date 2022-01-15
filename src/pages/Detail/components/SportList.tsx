/*
 * @Description: description
 * @Date: 2022-01-13 21:40:19
 * @LastEditors: maicq
 * @LastEditTime: 2022-01-15 18:09:12
 */
import React from 'react'
import {Image, StyleSheet, Text, View} from 'react-native'
import {colorVars} from '../../../styles/var'
export interface ISportItem {
  date: string;
  icon: string;
  desc: string;
}
interface IProps {
  data: Array<ISportItem>;
}
const SportList: React.FC<IProps> = props => {
  const {data} = props
  const listNode = data.map(item => {
    return (
      <View style={styles.sportListItem} key={item.date}>
        <View style={styles.date}>
          <Text>{item.date}</Text>
        </View>
        <View style={styles.detail}>
          <Image
            style={styles.icon}
            source={require('../../../assets/icon/icon_data_list_steps.webp')}
          />
          <Text style={styles.desc}>{item.desc}</Text>
        </View>
      </View>
    )
  })
  return <View style={styles.sportList}>{listNode}</View>
}
const styles = StyleSheet.create({
  sportList: {},
  date: {},
  icon: {
    width: 20,
    height: 20
  },
  sportListItem: {
    paddingVertical: 12,
    flexDirection: 'column',
    borderTopWidth: 1,
    borderColor: colorVars.borderColor
  },
  detail: {
    flexDirection: 'row',
    paddingVertical: 14,
    paddingLeft: 14
  },
  desc: {
    color: colorVars.primaryTextColor,
    marginLeft: 20
  }
})
export default SportList
