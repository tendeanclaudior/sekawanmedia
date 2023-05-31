import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {fonts} from '../../../Assets';

const button = ({title, onPress}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={styles.contentButton}>
        <Text style={styles.titleButton}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default button;

const styles = StyleSheet.create({
  contentButton: {
    backgroundColor: '#0D182B',
    width: '100%',
    height: 41,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleButton: {
    fontSize: 20,
    fontFamily: fonts.Poppins.semibold,
    color: '#FFFFFF',
  },
});
