import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getData} from '../../utils';
import {Gap, Header} from '../../Components';
import {fonts} from '../../Assets';

const Details = ({navigation}) => {
  const [dataNews, setDataNews] = useState();

  useEffect(() => {
    getData('dataNews').then(res => {
      setDataNews(res);
    });
  }, []);

  return (
    <SafeAreaView style={styles.page}>
      <Header title={'Details'} onPress={() => navigation.goBack('MainApp')} />
      <Gap height={32} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.containerDetails}>
          {dataNews?.urlToImage ? (
            <Image
              style={styles.noImage}
              source={{uri: dataNews?.urlToImage}}
            />
          ) : (
            <View style={styles.noImage} />
          )}
          <Gap height={10} />
          <View>
            <Text style={styles.title}>{dataNews?.title}</Text>
            <Gap height={5} />
            <Text style={styles.titlePublish}>{dataNews?.publishedAt}</Text>
            <Gap height={25} />
            <Text style={styles.titleDesc}>{dataNews?.description}</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Details;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  containerDetails: {
    paddingHorizontal: 30,
  },
  noImage: {
    backgroundColor: '#D9D9D9',
    width: '100%',
    height: 300,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    color: '#000000',
    fontStyle: 'italic',
  },
  titlePublish: {
    fontSize: 10,
    fontFamily: fonts.Poppins[300],
    color: '#000000',
  },
  titleDesc: {
    fontSize: 20,
    fontFamily: fonts.Poppins.semibold,
    color: '#000000',
  },
});
