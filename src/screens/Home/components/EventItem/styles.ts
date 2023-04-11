import theme from '@src/helpers/theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.lightFiveColor,
    borderRadius: 20,
    shadowColor: theme.colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
  },
  bodyWrapper: {
    padding: 10,
  },
  eventContainer: {
    backgroundColor: theme.colors.bgErrorColor,
  },
  eventBackground: {
    height: 200,
    borderRadius: 20,
  },
  overlayEvent: {
    backgroundColor: 'rgba(90, 100, 130, 0.4)',
    position: 'absolute',
    width: '100%',
    bottom: 0,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  eventTitle: {
    fontFamily: theme.fonts.openSansBold,
    color: theme.colors.lightFiveColor,
    fontSize: 16,
  },
  userInviteContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userImage: {
    width: 40,
    height: 40,
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
  joinEventBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.colors.mainColor,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 18,
  },
  joinEventText: {
    fontFamily: theme.fonts.openSansSemiBold,
    color: theme.colors.lightFiveColor,
  },
  arrowRight: {
    marginLeft: 10,
  },
});

export default styles;
