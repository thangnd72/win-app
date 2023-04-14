import React from 'react';
import { View } from 'react-native';
import { AppText, FastImage } from '@src/components';
import styles from './styles';
import theme from '@src/helpers/theme';

interface IProps {}
const EventDetail = () => {
  return (
    <View style={styles.container}>
      <FastImage
        pictureStyle={styles.eventCoverImage}
        uri={
          'https://blog.topcv.vn/wp-content/uploads/2021/07/sk2uEvents_Page_Header_2903ed9c-40c1-4f6c-9a69-70bb8415295b.jpg'
        }
      />
      <View style={styles.contentContainer}>
        <View style={styles.topView} />
        <AppText size={18} style={styles.eventNameText}>
          Yeni Inka Concert
        </AppText>
        <View style={styles.invitedContainer}>
          <View style={styles.userJoinWrapper}>
            <AppText>11.4k people joined</AppText>
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
          </View>
          <View>
            <AppText>View All</AppText>
          </View>
        </View>
      </View>
    </View>
  );
};
EventDetail.displayName = 'EventDetail';
export default EventDetail;
