import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
export interface ISportItem {
  date: string;
  icon: string;
  desc: string;
}
interface IProps {
  data: Array<ISportItem>;
}
const SportList: React.FC<IProps> = props => {
  const {data} = props;
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
          <Text>{item.desc}</Text>
        </View>
      </View>
    );
  });
  return <View style={styles.sportList}>{listNode}</View>;
};
const styles = StyleSheet.create({
  sportList: {
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  date: {},
  icon: {
    width: 20,
    height: 20,
  },
  sportListItem: {
    paddingVertical: 12,
    flexDirection: 'column',
  },
  detail: {
    flexDirection: 'row',
  },
});
export default SportList;
