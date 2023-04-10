import theme from '@src/helpers/theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  left: {
    paddingLeft: 16,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  right: {
    paddingRight: 16,
  },
  logo: {
    marginRight: 6,
  },
  header: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: theme.colors.lightFourColor,
  },
});

export default styles;
