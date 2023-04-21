import React from 'react';
import { EGuestScreenList } from '@navigators/RouteName';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

import { SignInScreen, SignUpScreen } from '@src/screens';

export type TGuestStackParam = {
  SIGN_IN_SCREEN: undefined;
  SIGN_UP_SCREEN: undefined;
};

const Stack = createStackNavigator<TGuestStackParam>();

const GuestNavigation = React.memo(() => {
  return (
    <Stack.Navigator
      initialRouteName={EGuestScreenList.SIGN_IN_SCREEN}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name={EGuestScreenList.SIGN_IN_SCREEN}
        options={{ ...TransitionPresets.ModalPresentationIOS }}
        component={SignInScreen}
      />
      <Stack.Screen
        name={EGuestScreenList.SIGN_UP_SCREEN}
        options={{ ...TransitionPresets.ModalPresentationIOS }}
        component={SignUpScreen}
      />
    </Stack.Navigator>
  );
});

GuestNavigation.displayName = 'GuestNavigation';
export default GuestNavigation;
