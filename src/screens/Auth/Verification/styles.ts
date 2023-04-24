import theme from '@src/helpers/theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: theme.colors.backgroundColor,
  },
  backWrapper: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  verifyCodeContainer: {
    marginTop: 100,
  },
  verifyCodeWrapper: {
    marginTop: 20,
    marginHorizontal: 60,
  },
  verifyTitle: {
    fontFamily: theme.fonts.openSansBold,
    paddingBottom: 10,
    lineHeight: 30,
  },
  emailText: {
    color: theme.colors.blueOne,
    fontFamily: theme.fonts.openSansSemiBold,
  },
  descriptionText: {
    marginRight: 40,
  },
  codeFieldRoot: { marginTop: 20 },
  cell: {
    width: 56,
    height: 56,
    lineHeight: 54,
    fontSize: 32,
    borderWidth: 1,
    borderColor: theme.colors.blueOne,
    color: theme.colors.blueOne,
    textAlign: 'center',
    borderRadius: 8,
    fontFamily: theme.fonts.openSansSemiBold,
  },
  focusCell: {
    borderColor: theme.colors.blueOne,
  },
  submitBtn: {
    marginTop: 25,
  },
  continueText: {
    fontSize: 15,
    fontFamily: theme.fonts.openSansSemiBold,
  },
});

export default styles;
