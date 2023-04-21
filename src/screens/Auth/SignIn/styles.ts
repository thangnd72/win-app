import { SIZE } from '@src/helpers/size';
import theme from '@src/helpers/theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
  containerKeyBoard: {
    backgroundColor: theme.colors.lightFiveColor,
  },
  logoWrapper: {
    alignSelf: 'center',
    alignItems: 'center',
  },
  appName: {
    lineHeight: 50,
    fontFamily: theme.fonts.openSansSemiBold,
  },
  loginForm: {
    paddingTop: 20,
  },
  wrapperTextInput: {
    paddingVertical: 10,
    borderRadius: 5,
  },
  bodyContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  remember: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  signInBtn: {
    marginTop: 25,
  },
  rememberText: {
    paddingLeft: 10,
  },
  noAccountText: {
    textAlign: 'center',
    paddingVertical: 30,
  },
});

export default styles;
