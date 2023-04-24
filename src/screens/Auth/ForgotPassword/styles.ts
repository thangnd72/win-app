import theme from '@src/helpers/theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  containerKeyBoard: {
    backgroundColor: theme.colors.lightFiveColor,
  },
  bodyContainer: {
    marginTop: 100,
  },
  backWrapper: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  forgotTitle: {
    fontFamily: theme.fonts.openSansBold,
    paddingBottom: 10,
    lineHeight: 30,
    alignSelf: 'center',
  },
  descriptionText: {
    color: theme.colors.darkTwoColor,
    fontSize: 15,
    alignSelf: 'center',
    marginHorizontal: 40,
    textAlign: 'center',
    paddingBottom: 20,
  },
  wrapperTextInput: {
    paddingVertical: 10,
    borderRadius: 5,
  },
  submitBtn: {
    marginTop: 25,
  },
  verifyText: {
    fontSize: 15,
    fontFamily: theme.fonts.openSansSemiBold,
  },
});

export default styles;
