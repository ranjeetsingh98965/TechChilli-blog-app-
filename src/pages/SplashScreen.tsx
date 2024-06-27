import React, {useEffect} from 'react';
import {
  View,
  Text,
  StatusBar,
  ImageBackground,
  SafeAreaView,
  Image,
} from 'react-native';
import theme from '../constants/theme';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen = () => {
  const navigation = useNavigation();

  const handleNavigation = async () => {
    const name = await AsyncStorage.getItem('name');
    const gender = await AsyncStorage.getItem('gender');
    // console.log('n: ', name, ' g: ', gender);
    if (name == null || gender == null) {
      navigation.navigate('onBoardingScreen');
    } else {
      navigation.navigate('homeScreen');
    }
  };

  useEffect(() => {
    setTimeout(() => {
      handleNavigation();
    }, 1500);
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar
        animated={true}
        barStyle={'dark-content'}
        backgroundColor={theme.COLORS.WHITE}
      />
      <ImageBackground
        source={require('../assets/images/splash.jpg')}
        style={{
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        resizeMode="cover">
        <View
          style={{
            height: '20%',
            width: '80%',
            backgroundColor: '#fff',
            justifyContent: 'center',
            alignItems: 'center',
            opacity: 0.7,
            borderRadius: 10,
            elevation: 5,
          }}>
          <Image
            source={require('../assets/images/logo/logo.png')}
            style={{width: '100%', height: '100%'}}
            resizeMode="cover"
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default SplashScreen;
