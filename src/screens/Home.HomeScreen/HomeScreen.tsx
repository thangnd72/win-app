import React from 'react';
import { Text, View } from 'react-native';

import styles from '@screens/Home.HomeScreen/Styles.HomeScreen';

const HomeScreen = React.memo(() => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
    </View>
  );
});

HomeScreen.displayName = 'HomeScreen';
export default HomeScreen;
