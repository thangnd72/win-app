import { StatusBar, StyleSheet, ViewStyle } from 'react-native';

import { SIZE } from '@src/helpers/size';
import theme from '@src/helpers/theme';

class CheckboxStyles {
  private static _styles = StyleSheet.create({
    container: {
      backgroundColor: theme.colors.lightFiveColor,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  public static styles = {
    ...this._styles,
  };
}

export default CheckboxStyles.styles;
