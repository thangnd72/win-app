import { StyleSheet } from 'react-native';

import theme from '@src/helpers/theme';
import { SIZE } from '@src/helpers/size';

class ButtonStyles {
  private static _styles = StyleSheet.create({
    container: {
      height: 54,
      backgroundColor: theme.colors.mainColor,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
    },
    buttonText: {
      ...SIZE.FONT_SIZES.normal,
      color: theme.colors.lightFiveColor,
      fontFamily: theme.fonts.openSansRegular,
    },
    textContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    outLineContainer: {
      backgroundColor: theme.colors.lightFiveColor,
      borderWidth: 1,
      borderColor: theme.colors.lightFourColor,
      borderStyle: 'solid',
    },
    outLineText: {
      color: theme.colors.darkOneColor,
    },
  });

  public static styles = {
    ...this._styles,

    getBackgroundColor: (disabled?: boolean, buttonColor?: string) => ({
      backgroundColor: disabled ? theme.colors.darkFourColor : buttonColor,
    }),
  };
}

export default ButtonStyles.styles;