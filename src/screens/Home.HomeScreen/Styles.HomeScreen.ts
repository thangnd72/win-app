import theme from '@src/helpers/theme';
import { StyleSheet } from 'react-native';

class HomeScreenStyles {
  private static _styles = StyleSheet.create({
    container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
    text: {
      fontFamily: theme.fonts.openSansSemiLight,
      fontSize: 28,
    },
  });

  public static styles = {
    ...this._styles,
  };
}

export default HomeScreenStyles.styles;
