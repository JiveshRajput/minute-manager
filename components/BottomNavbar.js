import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function NavOption() {
    const navigation = useNavigation();
    return (
        <View className="flex h-[70px] flex-row p-4 justify-between" >
            <Text className='text-[#0073dd]' onPress={()=> navigation.navigate('Home')}>Home</Text>
            <Text className='text-[#0073dd]' >Add</Text>
            <Text className='text-[#0073dd]' onPress={()=> navigation.navigate('Setting')}>Settings</Text>
        </View>
    );
}