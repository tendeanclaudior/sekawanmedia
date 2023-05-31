import {
  Alert,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import {IconLogout, fonts} from '../../Assets';
import List from './List';
import {Gap} from '../../Components';
import {useFocusEffect} from '@react-navigation/native';
import {getData, storeData} from '../../utils';
import {signOut} from 'firebase/auth';
import {auth} from '../../Firebase';

const Home = ({navigation}) => {
  const [dataUser, setDataUser] = useState();

  useFocusEffect(
    useCallback(() => {
      getData('user').then(res => {
        setDataUser(res);
      });
    }, []),
  );

  const logoutAcc = () => {
    signOut(auth).then(() => {
      Alert.alert('Anda Berhasil Keluar');
      storeData('user', '');
      navigation.replace('SignInSignUp');
    });
  };

  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.containerName}>
        <View style={styles.contentName}>
          <View>
            <Text style={styles.titleName}>{dataUser?.fullName}</Text>
            <Text style={styles.titleEmail}>{dataUser?.email}</Text>
          </View>
          <TouchableOpacity activeOpacity={0.5} onPress={() => logoutAcc()}>
            <IconLogout />
          </TouchableOpacity>
        </View>
      </View>
      <Gap height={23} />
      <List />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  containerName: {
    backgroundColor: '#67CBB2',
    width: '100%',
    height: 100,
    borderBottomEndRadius: 50,
    borderBottomLeftRadius: 50,
    elevation: 10,
    shadowColor: '#000000',
  },
  contentName: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 35,
  },
  titleName: {
    fontSize: 20,
    fontFamily: fonts.Poppins.semibold,
    color: '#FFFFFF',
    textTransform: 'capitalize',
  },
  titleEmail: {
    fontSize: 15,
    fontFamily: fonts.Poppins.regular,
    color: '#FFFFFF',
  },
});
