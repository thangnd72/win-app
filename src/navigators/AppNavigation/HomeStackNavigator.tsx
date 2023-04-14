import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { EHomeScreenList } from '@navigators/RouteName';
import { HomeScreen, EventDetailScreen } from '@src/screens';

export type THomeStack = {
  [EHomeScreenList.HOME_SCREEN]: undefined;
  [EHomeScreenList.EVENT_DETAIL_SCREEN]: undefined;
};

const HomeStackScreen = React.memo(() => {
  const Stack = createStackNavigator<THomeStack>();
  return (
    <Stack.Navigator
      initialRouteName={EHomeScreenList.HOME_SCREEN}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name={EHomeScreenList.HOME_SCREEN}
        options={{ ...TransitionPresets.BottomSheetAndroid }}
        component={HomeScreen}
      />
      <Stack.Screen
        name={EHomeScreenList.EVENT_DETAIL_SCREEN}
        options={{ ...TransitionPresets.SlideFromRightIOS }}
        component={EventDetailScreen}
      />
    </Stack.Navigator>
  );
});

HomeStackScreen.displayName = 'HomeStackScreen';
export default HomeStackScreen;
