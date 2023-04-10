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
  SuffixComponent?: React.ReactElement;
  PrefixComponent?: React.ReactElement;
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
  SuffixComponent,
  PrefixComponent,
  activeOpacity,
  outline,
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
          {PrefixComponent !== undefined && PrefixComponent}
          <Text style={[styles.buttonText, textStyle, outline ? styles.outLineText : {}]}>
            {text}
          </Text>
          {SuffixComponent !== undefined && SuffixComponent}
        </View>
      )}
    </TouchableOpacity>
  );
};

export default Button;
