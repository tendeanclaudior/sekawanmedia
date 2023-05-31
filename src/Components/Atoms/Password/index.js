import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {EyeClose, EyeOpen} from '../../../Assets';

const Password = ({placeholder, value, onChangeText}) => {
  const [eye, setEye] = useState(false);

  const setOpenEye = () => {
    setEye(!eye);
  };

  return (
    <View style={styles.containerPassword}>
      <View style={styles.contentPassword}>
        <TextInput
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          placeholderTextColor={'#5A5A5A'}
          secureTextEntry={eye ? false : true}
        />
        {eye ? (
          <TouchableOpacity activeOpacity={0.5} onPress={setOpenEye}>
            <EyeOpen />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity activeOpacity={0.5} onPress={setOpenEye}>
            <EyeClose />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Password;

const styles = StyleSheet.create({
  containerPassword: {
    borderWidth: 1,
    borderColor: '#0D182B',
    borderRadius: 10,
    width: '100%',
    height: 41,
  },
  contentPassword: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 7,
  },
});
