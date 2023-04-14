import React from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';

import styles from '@src/screens/Home/styles';
import { FilterIcon, SearchIcon } from '@src/assets/icons';
import { AppText, FastImage, TabBar } from '@src/components';
import theme from '@src/helpers/theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import EventItem from './components/EventItem/EventItem';
import EventSuggested from './components/EventSuggested/EventSuggested';
import { SIZE } from '@src/helpers/size';
import GlobalNavigation from '@src/helpers/GlobalNavigation';
import { EventScreenList } from '@src/navigators/RouteName';

const HomeScreen = React.memo(() => {
  const [selectedTabIndex, setSelectedTabIndex] = React.useState<number>(0);
  const insets = useSafeAreaInsets();

  const onPressTab = React.useCallback((tabIndex: number) => {
    setSelectedTabIndex(tabIndex);
  }, []);

  const goToEventDetail = React.useCallback(() => {
    GlobalNavigation.navigate(EventScreenList.EVENT_DETAIL_SCREEN);
  }, []);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={[styles.headerWrapper, { marginTop: insets.top + 16 }]}>
        <View>
          <AppText size={16} color={theme.colors.darkThreeColor}>
            Hello,
          </AppText>
          <AppText size={24} style={styles.userNameText}>
            Nguyen Dinh Thang
          </AppText>
        </View>
        <FastImage
          uri='https://i.pinimg.com/736x/62/11/b4/6211b409a9f9e9c35241b8bc6d0ad69b.jpg'
          pictureStyle={styles.userImage}
        />
      </View>
      <View style={styles.searchContainer}>
        <TouchableOpacity style={styles.searchInput} activeOpacity={0.6}>
          <SearchIcon style={styles.searchIcon} />
          <AppText color={theme.colors.darkFiveColor}>Search for event</AppText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterWrapper} activeOpacity={0.6}>
          <FilterIcon />
        </TouchableOpacity>
      </View>
      <View style={styles.wrapperUpcomingEvent}>
        <AppText style={styles.upcomingTitle} size={18}>
          Upcoming Event
        </AppText>
        <AppText color={theme.colors.mainColor} style={{}}>
          View All
        </AppText>
      </View>
      <TabBar
        tabs={[{ label: 'Today' }, { label: 'Tomorrow' }]}
        onPressTab={onPressTab}
        selectedIndex={selectedTabIndex}
        style={styles.tabBar}
      />
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {[1, 2, 3, 4, 5].map((item, index) => {
          return (
            <View key={index} style={[styles.wrapperEvent, { paddingHorizontal: 10 }]}>
              <EventItem onPressItem={goToEventDetail} />
            </View>
          );
        })}
      </ScrollView>
      <View style={styles.wrapperUpcomingEvent}>
        <AppText style={styles.upcomingTitle} size={18}>
          Suggested Events
        </AppText>
        <AppText color={theme.colors.mainColor} style={{}}>
          View All
        </AppText>
      </View>
      <ScrollView showsHorizontalScrollIndicator={false}>
        {[1, 2, 3].map((item, index) => {
          return (
            <View key={index} style={[styles.wrapSuggestedEvent, { paddingHorizontal: 10 }]}>
              <EventSuggested onPressItem={goToEventDetail} />
            </View>
          );
        })}
      </ScrollView>
    </ScrollView>
  );
});

HomeScreen.displayName = 'HomeScreen';
export default HomeScreen;
