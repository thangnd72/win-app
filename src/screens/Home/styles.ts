import { SIZE } from '@src/helpers/size';
import theme from '@src/helpers/theme';
import { StyleSheet } from 'react-native';

class HomeScreenStyles {
  private static _styles = StyleSheet.create({
    container: { flex: 1 },
    headerWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 16,
    },
    userNameText: {
      paddingVertical: 16,
      fontFamily: theme.fonts.openSansBold,
    },
    userImage: {
      width: 60,
      height: 60,
      borderRadius: 30,
    },
    searchContainer: { flexDirection: 'row', paddingHorizontal: 16 },
    searchIcon: { paddingHorizontal: 24 },
    searchInput: {
      flex: 1,
      height: 48,
      borderRadius: 50,
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: theme.colors.lightTwoColor,
    },
    filterWrapper: {
      alignItems: 'center',
      justifyContent: 'center',
      width: 48,
      height: 48,
      borderRadius: 24,
      borderWidth: 1,
      marginLeft: 10,
      borderColor: theme.colors.lightTwoColor,
    },
    wrapperUpcomingEvent: {
      paddingVertical: 16,
      paddingHorizontal: 16,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    upcomingTitle: {
      fontFamily: theme.fonts.openSansSemiBold,
      color: theme.colors.darkOneColor,
    },
    tabBar: {
      marginTop: 20,
    },
    wrapperEvent: {
      width: SIZE.SCREEN_WIDTH,
      paddingVertical: 20,
    },
    wrapSuggestedEvent: {
      paddingVertical: 8,
    },
  });

  public static styles = {
    ...this._styles,
  };
}

export default HomeScreenStyles.styles;
