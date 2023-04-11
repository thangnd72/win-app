import theme from '@src/helpers/theme';
import { StyleSheet } from 'react-native';

class HomeScreenStyles {
  private static _styles = StyleSheet.create({
    container: { flex: 1, paddingHorizontal: 16 },
    text: {
      paddingVertical: 16,
      fontFamily: theme.fonts.openSansBold,
    },
  });

  public static styles = {
    ...this._styles,
  };
}

export default HomeScreenStyles.styles;
