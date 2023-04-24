import React from 'react';
import {
  ActivityIndicator,
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewStyle,
} from 'react-native';

import theme from '@src/helpers/theme';
import styles from './styles';

export interface IProps extends TouchableOpacityProps {
  containerStyle?: StyleProp<ViewStyle>;
  bodyStyle?: StyleProp<ViewStyle>;
  text: string;
  buttonColor?: string;
  loadingIndicatorColor?: string;
  loadingIndicatorStyle?: string;
  loading?: boolean;
  outline?: boolean;
  disabledOpacity?: number;
  textStyle?: StyleProp<TextStyle>;

  iconRight?: React.ReactNode;
  iconLeft?: React.ReactNode;
}

const Button = ({
  onPress,
  containerStyle,
  bodyStyle,
  text,
  buttonColor = theme.colors.mainColor,
  loadingIndicatorColor = theme.colors.lightFiveColor,
  loading,
  disabled,
  textStyle,
  activeOpacity,
  outline,
  iconRight,
}: IProps) => {
  return (
    <TouchableOpacity
      activeOpacity={activeOpacity}
      style={[
        styles.container,
        styles.getBackgroundColor(disabled, buttonColor),
        containerStyle,
        outline ? styles.outLineContainer : {},
      ]}
      onPress={onPress}
      disabled={loading || disabled}
    >
      {loading && <ActivityIndicator size='small' color={loadingIndicatorColor} />}
      {!loading && (
        <View style={[styles.textContainer, bodyStyle]}>
          <Text style={[styles.buttonText, textStyle, outline ? styles.outLineText : {}]}>
            {text}
          </Text>
          {iconRight && <View style={styles.suffixIcon}>{iconRight}</View>}
        </View>
      )}
    </TouchableOpacity>
  );
};

export default Button;
