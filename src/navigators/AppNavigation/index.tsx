import React from 'react';

//constants
import { EAppScreenList } from '@navigators/RouteName';

//screens && components
import HomeStackScreen from '@navigators/AppNavigation/HomeStackNavigator';

//other imports
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { ViewStyle } from 'react-native';

import theme from '@src/helpers/theme';

import {
  AddEventIcon,
  EventTabIcon,
  HomeTabIcon,
  NotiTabIcon,
  ProfileTabIcon,
} from '@src/assets/icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const notShowBottomTabScreens: string[] = [];
const Tab = createBottomTabNavigator();

export type AppStackParam = {
  HOME_STACK_SCREEN: undefined;
  EVENT_STACK_SCREEN: undefined;
  ADD_EVENT_STACK_SCREEN: undefined;
  NOTIFICATION_STACK_SCREEN: undefined;
  SETTING_STACK_SCREEN: undefined;
};

const AppNavigation = React.memo(() => {
  const insets = useSafeAreaInsets();
  const defaultTabBarStyle: ViewStyle = React.useMemo(
    () => ({
      height: 72,
      flexDirection: 'row',
      backgroundColor: theme.colors.backgroundColor,
      borderTopWidth: 0,
      elevation: 0,
    }),
    [insets.bottom],
  );

  const tabBarList = [
    {
      name: EAppScreenList.HOME_STACK_SCREEN,
      component: HomeStackScreen,
      tabBarLabel: 'Home',
      tabBarIcon: HomeTabIcon,
    },
    {
      name: EAppScreenList.EVENT_STACK_SCREEN,
      component: HomeStackScreen,
      tabBarLabel: 'Events',
      tabBarIcon: EventTabIcon,
    },
    {
      name: EAppScreenList.ADD_EVENT_STACK_SCREEN,
      component: HomeStackScreen,
      tabBarLabel: 'AddEvents',
      tabBarIcon: AddEventIcon,
    },
    {
      name: EAppScreenList.NOTIFICATION_STACK_SCREEN,
      component: HomeStackScreen,
      tabBarLabel: 'Notification',
      tabBarIcon: NotiTabIcon,
    },
    {
      name: EAppScreenList.SETTING_STACK_SCREEN,
      component: HomeStackScreen,
      tabBarLabel: 'Settings',
      tabBarIcon: ProfileTabIcon,
    },
  ];

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.lightOneColor,
        tabBarInactiveTintColor: theme.colors.lightTwoColor,
        tabBarItemStyle: {
          flex: 1,
          alignItems: 'center',
          paddingBottom: 8,
        },
        tabBarLabelStyle: {
          fontSize: 11,
          textAlign: 'center',
          fontFamily: theme.fonts.openSansRegular,
        },
      }}
    >
      {tabBarList.map(({ name, component, tabBarIcon, tabBarLabel }, index) => {
        return (
          <Tab.Screen
            key={`${index}`}
            name={name}
            component={component}
            options={({ route }) => ({
              tabBarShowLabel: false,
              tabBarStyle: ((route) => {
                const routeName = getFocusedRouteNameFromRoute(route) ?? '';
                if (notShowBottomTabScreens.includes(routeName)) {
                  return {
                    display: 'none',
                  };
                }
                return defaultTabBarStyle;
              })(route),
              tabBarIcon: tabBarIcon,
              tabBarLabel: tabBarLabel,
            })}
          />
        );
      })}
    </Tab.Navigator>
  );
});

AppNavigation.displayName = 'AppNavigation';
export default AppNavigation;
