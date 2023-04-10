import { View } from 'react-native';

import styles from './styles';
import theme from '@src/helpers/theme';
import { CheckedAroundIcon, ErrorAroundIcon } from '@src/assets/icons';
import { AppText } from '@src/components';

interface IToastSuccess {
  message: string;
}

export const ToastSuccess = ({ message }: IToastSuccess) => {
  return (
    <View style={styles.container}>
      <CheckedAroundIcon fill={theme.colors.lightFourColor} />
      <AppText style={styles.txt}>{message}</AppText>
    </View>
  );
};

interface IToastError {
  message: string;
}

export const ToastError = ({ message }: IToastError) => {
  return (
    <View style={[styles.container, { backgroundColor: theme.colors.bgErrorColor }]}>
      <ErrorAroundIcon fill={theme.colors.lightFiveColor} />
      <AppText style={[styles.txt, { color: theme.colors.lightFiveColor }]}>{message}</AppText>
    </View>
  );
};
