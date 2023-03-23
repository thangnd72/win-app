import { StyleSheet } from 'react-native';
import { SIZE } from '@helpers/size';

export const styles = StyleSheet.create({
  loadingStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    flex: 1,
  },
  lottieView: {
    height: SIZE.heightPixel(100),
    width: SIZE.widthPixel(100),
  },
});
