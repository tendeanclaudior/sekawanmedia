import {
  Linking,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Gap, Header} from '../../Components';
import {
  FotoProfil,
  LogoGitHub,
  LogoInstagram,
  LogoLinkedIn,
  fonts,
} from '../../Assets';

const Profile = ({navigation}) => {
  const handleGitHub = () => {
    Linking.openURL('https://github.com/tendeanclaudior');
  };

  const handleLinkedIn = () => {
    Linking.openURL('https://www.linkedin.com/in/dio-tendean-298853276/');
  };

  const handleInstagram = () => {
    Linking.openURL('https://www.instagram.com/tendeandio_/');
  };

  return (
    <SafeAreaView style={styles.page}>
      <Header title={'Profile'} onPress={() => navigation.goBack('MainApp')} />
      <Gap height={30} />
      <View style={styles.contentProfile}>
        <FotoProfil />
        <Gap height={15} />
        <Text style={styles.titleName}>Claudio R Tendean, S.Kom., ACP</Text>
        <Text style={styles.titleEmail}>diotendean1234@gmail.com</Text>
      </View>
      <Gap height={54} />
      <View style={styles.portofolio}>
        <TouchableOpacity
          style={styles.content}
          activeOpacity={0.5}
          onPress={() => handleGitHub()}>
          <LogoGitHub />
          <Text style={styles.title}>GitHub</Text>
        </TouchableOpacity>
        <Gap height={15} />
        <TouchableOpacity
          style={styles.content}
          activeOpacity={0.5}
          onPress={() => handleLinkedIn()}>
          <LogoLinkedIn />
          <Text style={styles.title}>LinkedIn</Text>
        </TouchableOpacity>
        <Gap height={15} />
        <TouchableOpacity
          style={styles.content}
          activeOpacity={0.5}
          onPress={() => handleInstagram()}>
          <LogoInstagram />
          <Text style={styles.title}>Instagram</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  contentProfile: {
    alignItems: 'center',
  },
  titleName: {
    fontSize: 20,
    fontFamily: fonts.Poppins.semibold,
    color: '#000000',
  },
  titleEmail: {
    fontSize: 15,
    fontFamily: fonts.Poppins.regular,
    color: '#000000',
  },
  portofolio: {
    paddingHorizontal: 30,
  },
  content: {
    backgroundColor: '#0D182B',
    width: '100%',
    height: 55,
    borderRadius: 15,
    paddingHorizontal: 13,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.Poppins.semibold,
    color: '#FFFFFF',
    marginLeft: 15,
  },
});
