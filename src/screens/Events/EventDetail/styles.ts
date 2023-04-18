import { SIZE } from '@src/helpers/size';
import theme from '@src/helpers/theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  eventCoverImage: {
    height: SIZE.SCREEN_HEIGHT / 2.8,
  },
  contentContainer: {
    backgroundColor: theme.colors.backgroundColor,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    position: 'relative',
    top: -20,
    paddingHorizontal: 16,
  },
  topView: {
    width: 80,
    height: 6,
    borderRadius: 20,
    marginVertical: 10,
    backgroundColor: theme.colors.lightTwoColor,
    alignSelf: 'center',
  },
  eventNameText: {
    fontFamily: theme.fonts.openSansBold,
    color: theme.colors.darkOneColor,
    paddingVertical: 16,
  },
  userInviteContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 25,
  },
  numberUserContainer: {
    backgroundColor: theme.colors.bgErrorColor,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: -10,
  },
  numberUser: {
    fontFamily: theme.fonts.openSansSemiBold,
  },
  invitedContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userJoinWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  eventTimeWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 16,
  },
  eventTimeContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  eventTimeText: {
    paddingLeft: 5,
    color: theme.colors.darkSixColor,
  },
  descriptionTitle: {
    fontFamily: theme.fonts.openSansSemiBold,
    paddingTop: 20,
    paddingBottom: 10,
  },
});

export default styles;
