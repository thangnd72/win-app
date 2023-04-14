import { SIZE } from '@src/helpers/size';
import theme from '@src/helpers/theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  eventCoverImage: {
    height: SIZE.SCREEN_HEIGHT / 2.5,
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
    paddingTop: 16,
  },
  userInviteContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userImage: {
    width: 30,
    height: 30,
    borderRadius: 25,
    borderWidth: 3,
    borderColor: theme.colors.lightFiveColor,
  },
  numberUserContainer: {
    backgroundColor: theme.colors.greenOneColor,
    paddingHorizontal: 10,
    borderRadius: 20,
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
});

export default styles;
