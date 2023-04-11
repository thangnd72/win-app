import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import styles from './styles';
import { ArrowRightIcon, FilterIcon, SearchIcon } from '@src/assets/icons';
import { AppText, FastImage } from '@src/components';
import theme from '@src/helpers/theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface IProps {
  item?: any;
  onPressItem?: () => void;
}
const EventItem = ({ onPressItem }: IProps) => {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.8}
      onPress={() => {
        if (onPressItem) onPressItem();
      }}
    >
      <View style={styles.bodyWrapper}>
        <View>
          <FastImage
            pictureStyle={styles.eventBackground}
            uri={
              'https://blog.topcv.vn/wp-content/uploads/2021/07/sk2uEvents_Page_Header_2903ed9c-40c1-4f6c-9a69-70bb8415295b.jpg'
            }
          />
          <View style={styles.overlayEvent}>
            <AppText style={styles.eventTitle}>Live music monata</AppText>
            <AppText size={12} color={theme.colors.lightFiveColor}>
              07:50 PM
            </AppText>
          </View>
        </View>
        <View
          style={[
            styles.userInviteContainer,
            { justifyContent: 'space-between', paddingVertical: 12 },
          ]}
        >
          <View style={styles.userInviteContainer}>
            {[1, 2, 3].map((item, key) => {
              return (
                <View key={key} style={key > 0 ? { marginLeft: -18 } : {}}>
                  <FastImage
                    uri='https://khoinguonsangtao.vn/wp-content/uploads/2022/09/hinh-anh-che-mat.jpg'
                    pictureStyle={styles.userImage}
                  />
                </View>
              );
            })}
            <View style={styles.numberUserContainer}>
              <AppText style={styles.numberUser} color={theme.colors.greenTwoColor}>
                +5
              </AppText>
            </View>
          </View>
          <TouchableOpacity style={styles.joinEventBtn}>
            <AppText style={styles.joinEventText}>Join Event</AppText>
            <ArrowRightIcon style={styles.arrowRight} />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};
EventItem.displayName = 'EventItem';
export default EventItem;
