import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {IconBack, fonts} from '../../../Assets';

const Header = ({onPress, title}) => {
  return (
    <View style={styles.container}>
      <View style={styles.contentHeader}>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.iconBack}
          onPress={onPress}>
          <IconBack />
        </TouchableOpacity>
        <Text style={styles.titleHeader}>{title}</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#67CBB2',
    width: '100%',
    height: 100,
    paddingHorizontal: 14,
  },
  contentHeader: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconBack: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleHeader: {
    fontSize: 20,
    fontFamily: fonts.Poppins.semibold,
    color: '#0D182B',
  },
});
