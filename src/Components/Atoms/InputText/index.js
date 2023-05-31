import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';

const InputText = ({placeholder, value, onChangeText}) => {
  return (
    <View style={styles.containerTextInput}>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor={'#5A5A5A'}
      />
    </View>
  );
};

export default InputText;

const styles = StyleSheet.create({
  containerTextInput: {
    borderWidth: 1,
    borderColor: '#0D182B',
    borderRadius: 10,
    width: '100%',
    height: 41,
    paddingHorizontal: 7,
  },
});
