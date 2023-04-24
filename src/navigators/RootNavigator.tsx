import React from 'react';

//constants
import { StatusBar } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { navigationRef } from '@src/helpers/GlobalNavigation';
import { ToastError, ToastSuccess } from '@src/components/Toast';

import { HomeScreen } from '@src/screens';
import theme from '@src/helpers/theme';
import Toast from 'react-native-toast-message';
import { ROUTES } from './RouteName';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import GuestNavigation from './GuestNavigation';
import AppNavigation from './AppNavigation';
const Stack = createStackNavigator();

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: theme.colors.backgroundColor,
  },
};

const toastConfig: any = {
  successMessage: ({ props }: { props: { message: string } }) => (
    <ToastSuccess message={props.message} />
  ),
  errorMessage: ({ props }: { props: { message: string } }) => (
    <ToastError message={props.message} />
  ),
};

const RootNavigator = React.memo(() => {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle={'dark-content'} translucent={true} backgroundColor='transparent' />
      <NavigationContainer ref={navigationRef} theme={navTheme}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {/* <Stack.Screen
            name={ROUTES.APP_NAVIGATION}
            component={gestureHandlerRootHOC(AppNavigation)}
          /> */}
          <Stack.Screen
            name={ROUTES.GUEST_NAVIGATION}
            component={gestureHandlerRootHOC(GuestNavigation)}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <Toast config={toastConfig} position='bottom' />
    </SafeAreaProvider>
  );
});

RootNavigator.displayName = 'RootNavigator';
export default RootNavigator;
