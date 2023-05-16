import React from 'react';
// import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Home'
import SettingScreen from './Setting'
import BottomNavbar from '../components/BottomNavbar'
const Stack = createNativeStackNavigator();


export default function Main() {
    return (
        <>
            <Stack.Navigator initialRouteName='Home' screenOptions={{ animation: 'slide_from_left' }}>
                <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Setting" component={SettingScreen} options={{ headerShown: false }} />
            </Stack.Navigator>
            <BottomNavbar />
        </>
    );
}
