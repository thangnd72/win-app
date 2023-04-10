import { CalendarIcon } from '@src/assets/icons';
import { AppText } from '@src/components';
import { SIZE } from '@src/helpers/size';
import theme from '@src/helpers/theme';
import dayjs from 'dayjs';
import React, { useState } from 'react';
import { StyleProp, TouchableOpacity, View, ViewStyle } from 'react-native';
import DatePicker, { DatePickerProps } from 'react-native-date-picker';
import styles from './styles';

interface IProps extends Omit<DatePickerProps, 'date'> {
  time?: Date | '';
  pickerMode: 'time' | 'date' | 'datetime' | undefined;
  containerStyle?: StyleProp<ViewStyle>;
  leftLabel?: string;
  rightLabel?: string;
  hasIconLeft?: boolean;
  hasIconRight?: boolean;
  errorMessage?: string | boolean;
  onDateChange: (time: Date) => void;
}

const DateTimePicker: React.FC<IProps> = ({
  time,
  pickerMode,
  containerStyle,
  leftLabel,
  rightLabel,
  hasIconLeft = false,
  hasIconRight = false,
  errorMessage,
  onDateChange,
  ...rest
}) => {
  const value = time ? time : new Date();
  const [openDatePicker, setOpenDatePicker] = useState<boolean>(false);

  const onConfirmDate = (date: Date) => {
    onDateChange(date);
    setOpenDatePicker(false);
  };

  const onOpenDatePicker = () => {
    setOpenDatePicker(true);
  };

  const onCancel = () => {
    setOpenDatePicker(false);
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.labelWrapper}>
        {leftLabel && <AppText style={styles.leftLabel}>{leftLabel}</AppText>}
        {rightLabel && <AppText style={styles.rightLabel}>{rightLabel}</AppText>}
      </View>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.datePickerContainer}
        onPress={onOpenDatePicker}
      >
        {hasIconLeft && (
          <View style={styles.iconRight}>
            <CalendarIcon />{' '}
          </View>
        )}
        <AppText style={styles.dateTxt}>{time ? dayjs(value).format('MM/DD/YYYY') : ''}</AppText>
        <View>
          <DatePicker
            {...rest}
            date={value}
            open={openDatePicker}
            modal
            mode={pickerMode}
            minuteInterval={5}
            androidVariant='iosClone'
            textColor={theme.colors.darkOneColor}
            style={{ width: SIZE.SCREEN_WIDTH }}
            onConfirm={onConfirmDate}
            onCancel={onCancel}
          />
        </View>
        {hasIconRight && (
          <View style={styles.iconRight}>
            <CalendarIcon />
          </View>
        )}
      </TouchableOpacity>
      {errorMessage ? <AppText style={styles.errorText}>{errorMessage}</AppText> : null}
    </View>
  );
};

export default DateTimePicker;
