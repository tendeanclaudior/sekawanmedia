import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {IconArrowRight, fonts} from '../../Assets';
import {Gap} from '../../Components';
import {storeData} from '../../utils';

const CardList = ({item, navigation}) => {
  return (
    <View>
      <View style={styles.containerCardList}>
        <View style={styles.contentCardList}>
          {item?.urlToImage ? (
            <Image style={styles.noImage} source={{uri: item?.urlToImage}} />
          ) : (
            <View style={styles.noImage} />
          )}
          <View style={styles.contentTitle}>
            <Text style={styles.titleAuthor}>{item?.author?.slice(0, 20)}</Text>
            <Gap height={2} />
            <Text numberOfLines={2} style={styles.titleDesc}>
              {item?.title}
            </Text>
            <Gap height={5} />
            <TouchableOpacity
              style={styles.contentDetails}
              activeOpacity={0.5}
              onPress={() => {
                const dataNews = {
                  urlToImage: item.urlToImage,
                  publishedAt: item.publishedAt,
                  description: item.description,
                  title: item.title,
                };
                storeData('dataNews', dataNews);
                navigation.navigate('Details', dataNews);
              }}>
              <Text style={styles.titleDetails}>Details Data</Text>
              <IconArrowRight />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CardList;

const styles = StyleSheet.create({
  containerCardList: {
    backgroundColor: '#0D182B',
    width: '100%',
    height: 130,
    borderRadius: 15,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  contentCardList: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  noImage: {
    backgroundColor: '#D9D9D9',
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  contentTitle: {
    marginLeft: 39,
  },
  titleAuthor: {
    fontSize: 17,
    fontFamily: fonts.Poppins.semibold,
    color: '#FFFFFF',
    textTransform: 'capitalize',
  },
  titleDesc: {
    fontSize: 15,
    width: 200,
    fontFamily: fonts.Poppins.regular,
    color: '#FFFFFF',
  },
  contentDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleDetails: {
    fontSize: 13,
    fontFamily: fonts.Poppins.semibold,
    color: '#FFFFFF',
  },
});
