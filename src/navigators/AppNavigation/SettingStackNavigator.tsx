import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { ESettingScreenList } from '@navigators/RouteName';
import { HomeScreen } from '@src/screens';

export type TSettingStack = {
  [ESettingScreenList.EVENT_DETAIL_SCREEN]: undefined;
};

const SettingStackScreen = React.memo(() => {
  const Stack = createStackNavigator<TSettingStack>();
  return (
    <Stack.Navigator
      initialRouteName={ESettingScreenList.EVENT_DETAIL_SCREEN}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name={ESettingScreenList.EVENT_DETAIL_SCREEN}
        options={{ ...TransitionPresets.SlideFromRightIOS }}
        component={HomeScreen}
      />
    </Stack.Navigator>
  );
});
SettingStackScreen.displayName = 'SettingStackScreen';
export default SettingStackScreen;
