import { StyleSheet } from 'react-native';

import theme from '@src/helpers/theme';

export const styles = StyleSheet.create({
  container: {
    height: 52,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: theme.colors.lightTwoColor,
  },
  textInput: {
    flex: 1,
    height: 52,
    // paddingLeft: 16,
    color: theme.colors.darkFourColor,
    fontFamily: theme.fonts.openSansRegular,
    fontSize: 15,
  },
  errorText: {
    color: theme.colors.errorColor,
    fontSize: 15,
    paddingTop: 5,
  },
  label: {
    flexDirection: 'row',
  },
  leftLabel: {
    flex: 1,
    fontSize: 12,
  },
  rightLabel: {
    fontSize: 12,
    color: theme.colors.darkOneColor,
  },
  iconRight: {
    paddingHorizontal: 12,
    color: theme.colors.darkOneColor,
  },
});
