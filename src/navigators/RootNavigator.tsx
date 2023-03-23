import React from 'react';

//constants
import { StatusBar } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { navigationRef } from '@src/helpers/GlobalNavigation';

import { HomeScreen } from '@src/screens';
import theme from '@src/helpers/theme';
const Stack = createStackNavigator();

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: theme.colors.backgroundColor,
  },
};

const RootNavigator = React.memo(() => {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle={'dark-content'} translucent={true} backgroundColor='transparent' />
      <NavigationContainer ref={navigationRef} theme={navTheme}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name='Home' component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
});

RootNavigator.displayName = 'RootNavigator';
export default RootNavigator;
