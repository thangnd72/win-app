import React from 'react';
import { StyleProp, TouchableOpacity, View, ViewStyle } from 'react-native';

import { CheckedIcon, UncheckIcon } from '@src/assets/icons';
import styles from './styles';

interface IProps {
  selected: boolean | undefined;
  onSelected?: () => void;
  disabled?: boolean;
  color?: string;
  style?: StyleProp<ViewStyle>;
}

const Checkbox = ({ selected, onSelected, disabled, style }: IProps) => {
  return (
    <View pointerEvents={disabled ? 'none' : 'auto'} style={style}>
      <TouchableOpacity
        delayPressIn={300}
        onPress={onSelected}
        disabled={disabled}
        style={styles.container}
      >
        {selected ? <CheckedIcon /> : <UncheckIcon />}
      </TouchableOpacity>
    </View>
  );
};

export default Checkbox;
