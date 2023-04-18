import { Calendar2Icon, ClockIcon } from '@src/assets/icons';
import { AppText, FastImage } from '@src/components';
import theme from '@src/helpers/theme';
import React from 'react';
import { Pressable, ScrollView, View } from 'react-native';
import EventHeader from '@screens/Events/components/EventHeader';
import styles from './styles';

interface IEventDetailProps {}

const EventDetail = () => {
  return (
    <View style={styles.container}>
      <FastImage
        pictureStyle={styles.eventCoverImage}
        uri={
          'https://blog.topcv.vn/wp-content/uploads/2021/07/sk2uEvents_Page_Header_2903ed9c-40c1-4f6c-9a69-70bb8415295b.jpg'
        }
      />
      <EventHeader />
      <ScrollView style={styles.contentContainer}>
        <View style={styles.topView} />
        <AppText size={20} style={styles.eventNameText}>
          Yeni Inka Concert
        </AppText>
        <View style={styles.eventTimeWrapper}>
          <View style={styles.eventTimeContent}>
            <Calendar2Icon />
            <AppText style={styles.eventTimeText}>Friday, June 27</AppText>
          </View>
          <View style={styles.eventTimeContent}>
            <ClockIcon />
            <AppText style={styles.eventTimeText}>20:00 - 23:00</AppText>
          </View>
        </View>
        <View style={styles.invitedContainer}>
          <AppText size={16} color={theme.colors.darkSixColor}>
            16 joined
          </AppText>
          <View style={styles.userJoinWrapper}>
            <Pressable style={styles.userInviteContainer}>
              {[1, 2, 3].map((item, key) => {
                return (
                  <View key={key} style={key > 0 ? { marginLeft: -10 } : {}}>
                    <FastImage
                      uri='https://khoinguonsangtao.vn/wp-content/uploads/2022/09/hinh-anh-che-mat.jpg'
                      pictureStyle={styles.userImage}
                    />
                  </View>
                );
              })}
              <View style={[styles.numberUserContainer, styles.userImage]}>
                <AppText style={styles.numberUser} color={theme.colors.lightFiveColor}>
                  +5
                </AppText>
              </View>
            </Pressable>
          </View>
        </View>
        <AppText style={styles.descriptionTitle} size={18}>
          Description
        </AppText>
        <AppText color={theme.colors.darkSixColor}>
          An event description is copy that aims to tell your potential attendees what will be
          happening at the event, who will be speaking, and what they will get out of attending.
          Good event descriptions can drive attendance to events and also lead to more media
          coverage.
        </AppText>

        <AppText style={styles.descriptionTitle} size={18}>
          Location
        </AppText>
      </ScrollView>
    </View>
  );
};
EventDetail.displayName = 'EventDetail';
export default EventDetail;
