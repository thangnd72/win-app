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
    flex: 1,
  },
  bodyWrapper: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  eventContainer: {
    backgroundColor: theme.colors.bgErrorColor,
  },
  eventBackground: {
    width: 70,
    height: 70,
    borderRadius: 20,
  },
  eventContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  wrapperContent: {
    paddingHorizontal: 15,
  },
  eventNameText: {
    fontFamily: theme.fonts.openSansBold,
    color: theme.colors.darkOneColor,
    paddingVertical: 5,
  },
});

export default styles;
