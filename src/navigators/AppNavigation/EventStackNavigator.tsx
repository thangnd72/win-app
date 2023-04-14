import { EventScreenList } from '@navigators/RouteName';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { EventDetailScreen } from '@src/screens';
import React from 'react';

export type TEventStack = {
  [EventScreenList.EVENT_DETAIL_SCREEN]: undefined;
};

const EventStackScreen = React.memo(() => {
  const Stack = createStackNavigator<TEventStack>();
  return (
    <Stack.Navigator
      initialRouteName={EventScreenList.EVENT_DETAIL_SCREEN}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name={EventScreenList.EVENT_DETAIL_SCREEN}
        options={{ ...TransitionPresets.SlideFromRightIOS }}
        component={EventDetailScreen}
      />
    </Stack.Navigator>
  );
});
EventStackScreen.displayName = 'EventStackScreen';
export default EventStackScreen;
