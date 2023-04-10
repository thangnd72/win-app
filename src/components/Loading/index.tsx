import { ActivityIndicator, View } from 'react-native';

import styles from './styles';
import theme from '@src/helpers/theme';

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size='large' color={theme.colors.mainColor} />
    </View>
  );
};

export default Loading;
