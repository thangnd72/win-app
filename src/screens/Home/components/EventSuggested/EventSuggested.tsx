import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import styles from './styles';
import { ArrowRight2Icon, ArrowRightIcon, FilterIcon, SearchIcon } from '@src/assets/icons';
import { AppText, FastImage } from '@src/components';
import theme from '@src/helpers/theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface IProps {
  item?: any;
  onPressItem?: () => void;
}
const EventSuggested = ({ onPressItem }: IProps) => {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.8}
      onPress={() => {
        if (onPressItem) onPressItem();
      }}
    >
      <View style={styles.bodyWrapper}>
        <View style={styles.eventContent}>
          <FastImage
            pictureStyle={styles.eventBackground}
            uri={
              'https://blog.topcv.vn/wp-content/uploads/2021/07/sk2uEvents_Page_Header_2903ed9c-40c1-4f6c-9a69-70bb8415295b.jpg'
            }
          />
          <View style={styles.wrapperContent}>
            <AppText color={theme.colors.darkTwoColor}>Hà Nội, Việt Nam</AppText>
            <AppText size={18} style={styles.eventNameText}>
              Yeni Inka Concert
            </AppText>
          </View>
        </View>
        <ArrowRight2Icon />
      </View>
    </TouchableOpacity>
  );
};
EventSuggested.displayName = 'EventSuggested';
export default EventSuggested;
