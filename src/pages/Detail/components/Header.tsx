import {Image, StyleSheet, Text, View} from 'react-native'
import React from 'react'
import {colorVars} from '../../../styles/var'
import {Icon} from '../../../components'
/*
 * @Description: description
 * @Date: 2022-01-15 11:40:58
 * @LastEditors: maicq
 * @LastEditTime: 2022-01-15 16:38:27
 */
const Header = () => {
  return (
    <View style={styles.header}>
      <Icon
        source={require('../../../assets/icon/icon_arrow_left_lined.webp')}
      />
      <View style={styles.dropdown}>
        <Text style={styles.title}>所有运动</Text>
        <Image
          style={styles.dropdownArrow}
          source={require('../../../assets/icon/icon_arrow_close_down_white.webp')}
        />
      </View>
      <Icon
        source={require('../../../assets/icon/abc_ic_menu_share_mtrl_alpha.png')}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  header: {
    backgroundColor: colorVars.primaryColor,
    height: 40,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 16
  },
  dropdown: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  dropdownArrow: {
    width: 15,
    height: 15,
    marginLeft: 4
  },
  title: {
    color: colorVars.secoendaryTextColor,
    fontSize: 17
  },
  preButton: {
    width: 28,
    height: 28
  }
})
export default Header
