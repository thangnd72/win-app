import React from 'react';
import { EGuestScreenList } from '@navigators/RouteName';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

import { HomeScreen } from '@src/screens';

export type TGuestStackParam = {
  LOG_IN: undefined;
};

const Stack = createStackNavigator<TGuestStackParam>();

const GuestNavigation = React.memo(() => {
  return (
    <Stack.Navigator
      initialRouteName={EGuestScreenList.LOG_IN}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name={EGuestScreenList.LOG_IN}
        options={{ ...TransitionPresets.ModalPresentationIOS }}
        component={HomeScreen}
      />
    </Stack.Navigator>
  );
});

GuestNavigation.displayName = 'GuestNavigation';
export default GuestNavigation;
