import {SafeAreaView, StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import {Logo} from '../../Assets';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('SignInSignUp');
    }, 3000);
  });

  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.container}>
        <Logo />
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#67CBB2',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
