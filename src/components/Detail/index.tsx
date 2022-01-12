/*
 * @Description: description
 * @Date: 2022-01-02 13:34:00
 * @LastEditors: maicq
 * @LastEditTime: 2022-01-12 19:32:25
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
import {PieChart} from 'react-native-charts-wrapper';
const Detail = (props: any) => {
  const {children} = props;
  const [activeTab, setActiveTab] = useState(1);
  function getTabTextStyle(idx: number) {
    return {
      color: activeTab === idx ? '#AEA8B8' : 'white',
    };
  }

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
            <PieChart
              style={styles.chart}
              data={{
                dataSets: [
                  {label: 'demo', values: [{label: 'Test', value: 1}]},
                ],
              }}
            />
          </View>
          <View style={styles.overview}>
            <View style={styles.overviewHeader}>
              <Text>你累计运动时长</Text>
              <Text>(分钟)</Text>
            </View>
            <View style={styles.sportTimeWrapper}>
              <View style={styles.sportTime}>
                <Text style={styles.sportTimeText}>2205</Text>
              </View>
            </View>
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
  chart: {
    width: '100%',
    height: 100,
  },
  overview: {
    paddingHorizontal: 10,
  },
  overviewHeader: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sportTimeWrapper: {
    justifyContent: 'center',
  },
  sportTime: {
    width: 'auto',
  },
  sportTimeText: {
    fontSize: 40,
    color: '#585065',
  },
});
export default Detail;
