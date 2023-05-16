import React, { useEffect } from 'react';
import { Image, Text, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function SplashScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => { 
      navigation.navigate('MainScreen')
    }, 3000)
  }, [])

  return (
    <SafeAreaView className="flex-1 justify-center items-center bg-primary">
      <Image className='w-40 h-40 mb-6 rotate-[-5deg]' style={{ resizeMode: 'contain' }} source={require('../assets/images/logo.png')} />
      <Text className="text-2xl text-white">Minute Manager</Text>
    </SafeAreaView>
  );
}
