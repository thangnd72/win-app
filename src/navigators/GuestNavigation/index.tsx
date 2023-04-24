import React from 'react';
import { EGuestScreenList } from '@navigators/RouteName';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

import {
  SignInScreen,
  SignUpScreen,
  ForgotPasswordScreen,
  CreateNewPasswordScreen,
  VerificationScreen,
} from '@src/screens';

export type TGuestStackParam = {
  SIGN_IN_SCREEN: undefined;
  SIGN_UP_SCREEN: undefined;
  FORGOT_PASSWORD_SCREEN: undefined;
  CREATE_NEW_PASSWORD_SCREEN: undefined;
  VERIFICATION_SCREEN: undefined;
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
        options={{ ...TransitionPresets.SlideFromRightIOS }}
        component={SignUpScreen}
      />
      <Stack.Screen
        name={EGuestScreenList.FORGOT_PASSWORD_SCREEN}
        options={{ ...TransitionPresets.SlideFromRightIOS }}
        component={ForgotPasswordScreen}
      />
      <Stack.Screen
        name={EGuestScreenList.CREATE_NEW_PASSWORD_SCREEN}
        options={{ ...TransitionPresets.SlideFromRightIOS }}
        component={CreateNewPasswordScreen}
      />
      <Stack.Screen
        name={EGuestScreenList.VERIFICATION_SCREEN}
        options={{ ...TransitionPresets.SlideFromRightIOS }}
        component={VerificationScreen}
      />
    </Stack.Navigator>
  );
});

GuestNavigation.displayName = 'GuestNavigation';
export default GuestNavigation;
