import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {fonts} from '../../Assets';
import axios from 'axios';
import CardList from './CardList';
import {Gap} from '../../Components';
import {useNavigation} from '@react-navigation/native';

const baseURL =
  'https://newsapi.org/v2/everything?q=tesla&from=2023-04-30&sortBy=publishedAt&apiKey=b1875d927c754432b167cdb2ad1732a7';

const List = ({}) => {
  const [listData, setListData] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    axios.get(baseURL).then(res => {
      setListData(res?.data?.articles);
    });
  }, []);

  const renderItem = ({item}) => (
    <CardList item={item} navigation={navigation} />
  );

  return (
    <View style={styles.page}>
      <Text style={styles.title}>List Data</Text>
      <Gap height={15} />
      <FlatList
        data={listData}
        keyExtractor={(item, index) => 'key' + index}
        renderItem={renderItem}
      />
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  page: {
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 25,
    fontFamily: fonts.Poppins.semibold,
    color: '#0D182B',
  },
});
