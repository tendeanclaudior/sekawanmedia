import {
  Alert,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {IconBack, Logo, fonts} from '../../Assets';
import {Button, Gap, InputText, Password} from '../../Components';
import {storeData, useForm} from '../../utils';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import {auth} from '../../Firebase';
import {getDatabase, onValue, ref, set} from 'firebase/database';

const SignInSingUp = ({navigation}) => {
  const [modalSignIn, setModalSignIn] = useState(false);
  const [modalSignUp, setModalSigUp] = useState(false);
  const [form, setForm] = useForm({
    fullName: '',
    email: '',
    password: '',
  });

  const createAcc = () => {
    createUserWithEmailAndPassword(auth, form.email, form.password)
      .then(() => {
        setForm('reset');

        const data = {
          fullName: form.fullName,
          email: form.email,
        };

        const db = getDatabase();
        const userId = auth?.currentUser?.uid;
        const userData = ref(db, `users/${userId}/`);
        set(userData, data);

        storeData('user', data);
        navigation.replace('MainApp');
      })
      .catch(() => {
        Alert.alert('Periksa kembali email atau password kurang dari 6 angka');
      });
  };

  const handleErrorSU = () => {
    if (form.fullName === '') {
      Alert.alert('Mohon mengisi nama anda');
    } else if (form.email === '') {
      Alert.alert('Mohon megnisi email anda');
    } else if (form.password === '') {
      Alert.alert('Mohon mengisi password anda');
    } else {
      createAcc();
    }
  };

  const loginAcc = () => {
    signInWithEmailAndPassword(auth, form.email, form.password)
      .then(res => {
        setForm('reset');

        const db = getDatabase();
        const userId = res?.user?.uid;
        const usersRef = ref(db, `users/${userId}/`);
        const unsubscribe = onValue(usersRef, snapshot => {
          const data = snapshot.val();
          const dataUser = {
            fullName: data?.fullName,
            email: data?.email,
          };
          storeData('user', dataUser);
          navigation.replace('MainApp');
        });
        return () => {
          unsubscribe();
        };
      })
      .catch(() => {
        Alert.alert('Error', 'Masukan kembali data anda dengan benar');
      });
  };

  const handleErrorSI = () => {
    if (form.email === '') {
      Alert.alert('Error', 'Masukan Email Anda');
    } else if (form.password === '') {
      Alert.alert('Error', 'Masukan Password Anda');
    } else {
      loginAcc();
    }
  };

  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.container}>
        <View>
          <View style={styles.contentLogo}>
            <Gap height={40} />
            <Logo />
          </View>
          <Gap height={75} />
          <View style={styles.contentTitle}>
            <Text style={styles.title}>
              Sekawan Media <Text style={styles.title}>Intern</Text>
            </Text>
          </View>
        </View>
        <View style={styles.button}>
          <Button title={'Sign In'} onPress={() => setModalSignIn()} />
          <Gap height={14} />
          <Button title={'Sign Up'} onPress={() => setModalSigUp()} />
        </View>
      </View>
      <Modal
        animationType="none"
        transparent={true}
        visible={modalSignIn}
        onRequestClose={() => {
          setModalSignIn(!modalSignIn);
        }}>
        <View style={styles.containerModal}>
          <View style={styles.contentModal}>
            <View style={styles.bgModal}>
              <Gap height={30} />
              <View style={styles.contentBack}>
                <TouchableOpacity
                  activeOpacity={0.5}
                  style={styles.iconback}
                  onPress={() => setModalSignIn(!modalSignIn)}>
                  <IconBack />
                </TouchableOpacity>
                <Text style={styles.contentTitleModal}>Sign In</Text>
              </View>
              <Gap height={45 / 2} />
              <InputText
                placeholder={'Type your email.....'}
                value={form.email}
                onChangeText={text => setForm('email', text)}
              />
              <Gap height={15} />
              <Password
                placeholder={'Type your password.....'}
                value={form.password}
                onChangeText={text => setForm('password', text)}
              />
              <Gap height={30} />
              <Button title={'Sign In'} onPress={() => handleErrorSI()} />
            </View>
          </View>
        </View>
      </Modal>
      <Modal
        animationType="none"
        transparent={true}
        visible={modalSignUp}
        onRequestClose={() => {
          setModalSignIn(!modalSignUp);
        }}>
        <View style={styles.containerModal}>
          <View style={styles.contentModal}>
            <View style={styles.bgModal}>
              <Gap height={30} />
              <View style={styles.contentBack}>
                <TouchableOpacity
                  activeOpacity={0.5}
                  style={styles.iconback}
                  onPress={() => setModalSigUp(!modalSignUp)}>
                  <IconBack />
                </TouchableOpacity>
                <Text style={styles.contentTitleModal}>Sign Up</Text>
              </View>
              <Gap height={45 / 2} />
              <InputText
                placeholder={'Type your name.....'}
                value={form.fullName}
                onChangeText={text => setForm('fullName', text)}
              />
              <Gap height={15} />
              <InputText
                placeholder={'Type your email.....'}
                value={form.email}
                onChangeText={text => setForm('email', text)}
              />
              <Gap height={15} />
              <Password
                placeholder={'Type your password.....'}
                value={form.password}
                onChangeText={text => setForm('password', text)}
              />
              <Gap height={30} />
              <Button title={'Sign Up'} onPress={() => handleErrorSU()} />
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default SignInSingUp;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#67CBB2',
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  contentLogo: {
    alignItems: 'center',
  },
  contentTitle: {
    paddingHorizontal: 33,
  },
  title: {
    fontSize: 35,
    fontFamily: fonts.Poppins.bold,
    color: '#0D182B',
  },
  button: {
    paddingHorizontal: 30,
    marginBottom: 34,
  },
  containerModal: {
    flex: 1,
    backgroundColor: '#000000E5',
    paddingHorizontal: 20,
  },
  contentModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bgModal: {
    backgroundColor: '#67CBB2',
    width: '100%',
    height: 370,
    borderRadius: 15,
    paddingHorizontal: 15,
  },
  contentBack: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconback: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentTitleModal: {
    fontSize: 30,
    fontFamily: fonts.Poppins.semibold,
    color: '#0D182B',
  },
});
