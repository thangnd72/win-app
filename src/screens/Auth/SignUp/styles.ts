import theme from '@src/helpers/theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  backWrapper: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  bodyContainer: {
    marginTop: 60,
  },
  signUpTitle: {
    fontFamily: theme.fonts.openSansBold,
    lineHeight: 28,
    paddingBottom: 15,
  },
  wrapperTextInput: {
    paddingVertical: 10,
    borderRadius: 5,
  },
  signUpBtn: {
    marginTop: 25,
  },
  signUpText: {
    fontSize: 15,
    fontFamily: theme.fonts.openSansSemiBold,
  },
  alreadyText: {
    textAlign: 'center',
    paddingVertical: 30,
  },
});

export default styles;
