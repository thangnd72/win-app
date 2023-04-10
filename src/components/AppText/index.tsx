import theme from '@helpers/theme';
import React, { FC } from 'react';
import { StyleProp, Text, TextProps, TextStyle } from 'react-native';
import { styles } from './styles';

export interface AppTextProps extends TextProps {
  style?: StyleProp<TextStyle>;
  size?: number;
  color?: string;
}

const AppText: FC<AppTextProps> = ({
  size = 14,
  color = theme.colors.darkOneColor,
  style,
  children,
  ...otherProps
}) => {
  return (
    <Text style={[styles.text, { fontSize: size, color: color }, style]} {...otherProps}>
      {children}
    </Text>
  );
};

export default AppText;
