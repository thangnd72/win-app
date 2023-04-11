import React from 'react';
import { EGuestScreenList } from '@navigators/RouteName';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

import { SignUpScreen } from '@src/screens';

export type TGuestStackParam = {
  LOG_IN: undefined;
  SIGN_UP: undefined;
};

const Stack = createStackNavigator<TGuestStackParam>();

const GuestNavigation = React.memo(() => {
  return (
    <Stack.Navigator
      initialRouteName={EGuestScreenList.SIGN_UP}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name={EGuestScreenList.SIGN_UP}
        options={{ ...TransitionPresets.ModalPresentationIOS }}
        component={SignUpScreen}
      />
    </Stack.Navigator>
  );
});

GuestNavigation.displayName = 'GuestNavigation';
export default GuestNavigation;
