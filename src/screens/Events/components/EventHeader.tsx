import React from 'react';
import { StyleProp, StyleSheet, TouchableOpacity, View, ViewStyle } from 'react-native';
import { ArrowLeftIcon, MoreIcon } from '@src/assets/icons';
import GlobalNavigation from '@src/helpers/GlobalNavigation';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface IEventHeaderProps {
  style?: StyleProp<ViewStyle>;
  onEdit?: () => void;
}

const EventHeader = ({ style, onEdit }: IEventHeaderProps) => {
  const insets = useSafeAreaInsets();
  return (
    <>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          activeOpacity={0.6}
          style={[styles.backWrapper, { top: insets.top + 10 }]}
          onPress={() => GlobalNavigation.goBack()}
        >
          <ArrowLeftIcon />
        </TouchableOpacity>
      </View>
      <View style={[styles.headerContainer, { right: 0 }]}>
        <TouchableOpacity
          activeOpacity={0.6}
          style={[styles.backWrapper, { top: insets.top + 10, right: 0 }]}
          onPress={onEdit}
        >
          <MoreIcon />
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    position: 'absolute',
    paddingHorizontal: 20,
    flexDirection: 'row',
  },
  backWrapper: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
});

export default EventHeader;
