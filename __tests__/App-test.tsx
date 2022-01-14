/*
 * @Description: description
 * @Date: 2022-01-12 15:29:14
 * @LastEditors: maicq
 * @LastEditTime: 2022-01-13 14:30:40
 */
/**
 * @format
 */

import 'react-native'
import React from 'react'
import App from '../App'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  renderer.create(<App />)
})
