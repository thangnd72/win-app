import {
  Image,
  KeyboardTypeOptions,
  NativeSyntheticEvent,
  NativeTouchEvent,
  Pressable,
  Text,
  TextInput,
  TextInputProps,
  TextInputSubmitEditingEventData,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import theme from '@src/helpers/theme';

import { ETypeField } from './types';
import { styles } from './styles';
import { AppText } from '@src/components';
import { ShowHidePasswordIcon } from '@src/assets/icons';

interface ITextInputComponentProps {
  leftLabel?: string;
  rightLabel?: string;
  placeHolder?: string;
  textValue?: string;
  onChangeValue: (text: string) => void;
  keyboardType?: KeyboardTypeOptions;
  customTextInputStyle?: Pick<TextInputProps, 'style'>;
  multiline?: boolean;
  numberOfLines?: number;
  errorMessage?: string;
  onSubmitEditing?: (e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => void;
  type?: ETypeField;
  editable?: boolean;
  onPressIn?: (e: NativeSyntheticEvent<NativeTouchEvent>) => void;
  iconRight?: React.ReactNode;
  wrapperStyle?: ViewStyle;
}

const TextInputComponent: React.FC<ITextInputComponentProps> = React.memo(
  ({
    leftLabel,
    rightLabel,
    placeHolder,
    onChangeValue,
    keyboardType = 'default',
    customTextInputStyle,
    multiline = false,
    numberOfLines,
    errorMessage,
    onSubmitEditing,
    type = ETypeField.TEXT,
    editable = true,
    textValue,
    onPressIn,
    iconRight,
    wrapperStyle,
  }) => {
    const [hidden, setHidden] = React.useState(false);
    const [value, setValueChange] = React.useState('');

    const _handleOnchangeText = (string: string) => {
      setValueChange(string);
      if (onChangeValue) {
        onChangeValue(string);
      }
    };
    const _handleShowPassword = () => {
      setHidden(!hidden);
    };

    let textInputStyle: TextStyle = { ...styles.textInput };
    if (customTextInputStyle) {
      textInputStyle = { ...textInputStyle, ...customTextInputStyle };
    }

    let containerStyle = { ...styles.container };
    if (multiline && numberOfLines) {
      numberOfLines > 5 ? 5 : numberOfLines;

      containerStyle = {
        ...containerStyle,
        height: 20 * numberOfLines + 16,
      };

      textInputStyle = {
        ...textInputStyle,
        height: 20 * numberOfLines + 16,
        verticalAlign: 'top',
      };
    }

    return (
      <View style={wrapperStyle}>
        <View style={styles.label}>
          {leftLabel && <AppText style={styles.leftLabel}>{leftLabel}</AppText>}
          {rightLabel && <AppText style={styles.rightLabel}>{rightLabel}</AppText>}
        </View>
        <View style={containerStyle}>
          <TextInput
            value={textValue && textValue != '' ? textValue : value}
            keyboardType={keyboardType as any}
            placeholderTextColor={theme.colors.darkOneColor}
            style={[textInputStyle]}
            onChangeText={_handleOnchangeText}
            placeholder={placeHolder}
            multiline={multiline}
            secureTextEntry={type === ETypeField.PASSWORD && !hidden && true}
            editable={editable ?? true}
            onSubmitEditing={onSubmitEditing}
            onPressIn={onPressIn}
          />
          {type === ETypeField.PASSWORD && (
            <Pressable style={styles.iconRight} onPress={_handleShowPassword}>
              {ShowHidePasswordIcon({ show: hidden })}
            </Pressable>
          )}
          {iconRight && <View style={styles.iconRight}>{iconRight}</View>}
        </View>
        {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}
      </View>
    );
  },
);

TextInputComponent.displayName = 'TextInputComponent';
export default TextInputComponent;
