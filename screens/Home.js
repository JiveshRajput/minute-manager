import React from 'react';
import { View, Text } from 'react-native';

export default function HomeScreen({ navigation }) {
    return (
        <>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#f2f2f2' }}>
                <Text>Home Screen</Text>
            </View>
        </>
    );
}