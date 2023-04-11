import theme from '@src/helpers/theme';
import React from 'react';
import { StyleProp, TouchableOpacity, View, ViewStyle } from 'react-native';
import AppText from '../AppText';
import styles from './styles';

export type TopTab = {
  label: string;
};

interface TopTabBarProps {
  tabs: TopTab[];
  onPressTab: (index: number) => void;
  selectedIndex: number;
  style?: StyleProp<ViewStyle>;
  tabBarContainerStyle?: StyleProp<ViewStyle>;
}

const TopTabBar = ({
  tabs,
  onPressTab,
  selectedIndex,
  style,
  tabBarContainerStyle,
}: TopTabBarProps) => {
  return (
    <View style={[styles.container, style]}>
      {tabs.map((tab, index) => (
        <TouchableOpacity
          key={index}
          delayPressIn={250}
          style={tabBarContainerStyle}
          onPress={() => onPressTab(index)}
        >
          <View style={[styles.container, index === selectedIndex && styles.selected]}>
            <AppText
              color={
                index === selectedIndex ? theme.colors.darkOneColor : theme.colors.darkThreeColor
              }
              style={styles.text}
            >
              {tab.label}
            </AppText>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default TopTabBar;
