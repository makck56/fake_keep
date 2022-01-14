/*
 * @Description: description
 * @Date: 2022-01-02 21:30:59
 * @LastEditors: maicq
 * @LastEditTime: 2022-01-02 21:34:54
 */
import React from 'react'
import {View} from 'react-native'
interface ITabPanel {
  key: string;
}
const TabPanel: React.FC<ITabPanel> = props => {
  const {children} = props
  return <View>{children}</View>
}

export default TabPanel
