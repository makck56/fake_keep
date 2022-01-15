import {Image, ImageProps, StyleSheet} from 'react-native'
import React from 'react'
/*
 * @Description: description
 * @Date: 2022-01-15 12:20:11
 * @LastEditors: maicq
 * @LastEditTime: 2022-01-15 15:44:16
 */

const Icon: React.FC<ImageProps> = props => {
  return <Image source={props.source} style={styles.icon} />
}
const styles = StyleSheet.create({
  icon: {
    width: 22,
    height: 22
  }
})
export default Icon
