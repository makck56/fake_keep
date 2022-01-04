/*
 * @Description: description
 * @Date: 2022-01-02 13:34:00
 * @LastEditors: maicq
 * @LastEditTime: 2022-01-03 12:04:10
 */
import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Echarts from 'native-echarts';
const Detail = (props: any) => {
  const {children} = props;
  const [activeTab, setActiveTab] = useState(1);
  function getTabTextStyle(idx: number) {
    return {
      color: activeTab === idx ? '#AEA8B8' : 'white',
    };
  }
  const option = {
    title: {
      text: 'ECharts demo',
    },
    tooltip: {},
    legend: {
      data: ['销量'],
    },
    xAxis: {
      data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
    },
    yAxis: {},
    series: [
      {
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20],
      },
    ],
  };
  return (
    <View>
      <View style={styles.header}>
        <View style={styles.headerItem}>
          <TouchableWithoutFeedback onPress={() => setActiveTab(1)}>
            <Text style={{...styles.headerItemText, ...getTabTextStyle(1)}}>
              日
            </Text>
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.headerItem}>
          <TouchableWithoutFeedback onPress={() => setActiveTab(2)}>
            <Text style={{...styles.headerItemText, ...getTabTextStyle(2)}}>
              周
            </Text>
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.headerItem}>
          <TouchableWithoutFeedback onPress={() => setActiveTab(3)}>
            <Text style={{...styles.headerItemText, ...getTabTextStyle(3)}}>
              月
            </Text>
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.headerItem}>
          <TouchableWithoutFeedback onPress={() => setActiveTab(4)}>
            <Text style={{...styles.headerItemText, ...getTabTextStyle(4)}}>
              总
            </Text>
          </TouchableWithoutFeedback>
        </View>
      </View>
      <SafeAreaView>
        <ScrollView>
          <View>
            <Text>连续活动天数</Text>
            <Echarts option={option} height={300} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 40,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#575060',
    flexDirection: 'row',
  },
  headerItem: {
    flex: 1,
    color: 'white',
    justifyContent: 'center',
  },
  headerItemText: {
    width: '100%',
    color: 'white',
    textAlign: 'center',
  },
});
export default Detail;
