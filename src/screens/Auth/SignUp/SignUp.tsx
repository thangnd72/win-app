import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';

const SignUpScreen = React.memo(() => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>SignUpScreen</Text>
    </View>
  );
});

export default SignUpScreen;
