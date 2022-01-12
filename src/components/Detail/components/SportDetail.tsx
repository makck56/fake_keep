import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
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
  );
};
const styles = StyleSheet.create({
  sportDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detailItem: {},
  itemTitle: {
    width: '100%',
    fontSize: 10,
  },
  itemValue: {
    color: '#564F5F',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
export default exportDetail;
