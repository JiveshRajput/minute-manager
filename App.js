import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

// Navigations
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Store
import { store, persistor } from './store/appStore'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

// Screens
import Main from './screens/Main';
import SplashScreen from './screens/Splash';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <>
      <PersistGate persistor={persistor}>
        <Provider store={store}>
          <NavigationContainer>
            <StatusBar backgroundColor={'#0073dd'} />
            <SafeAreaView className="flex-1">
              <Stack.Navigator initialRouteName='SplashScreen' screenOptions={{ headerShown: false }}>
                <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ animation: 'fade' }} />
                <Stack.Screen name="MainScreen" component={Main} options={{}} />
              </Stack.Navigator>
            </SafeAreaView>
          </NavigationContainer>
        </Provider>
      </PersistGate>
    </>
  );
}


export default App;
