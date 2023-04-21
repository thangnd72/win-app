import React from 'react';
import { ScrollView, Switch, TouchableOpacity, View } from 'react-native';
import { EmailIcon, FilterIcon, LockIcon, LogoIcon, SearchIcon } from '@src/assets/icons';
import { AppSwitch, AppText, Button, FastImage, TabBar } from '@src/components';
import theme from '@src/helpers/theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { SIZE } from '@src/helpers/size';
import GlobalNavigation from '@src/helpers/GlobalNavigation';
import { EventScreenList } from '@src/navigators/RouteName';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { TextInputUI } from '@src/components';
import styles from './styles';
import { ETypeField } from '@src/components/TextInput/types';

const SignInScreen = React.memo(() => {
  const [remember, setRemember] = React.useState(false);

  const toggleRememberMe = React.useCallback(() => {
    setRemember((prev) => !prev);
  }, []);
  return (
    <KeyboardAwareScrollView
      extraScrollHeight={50}
      enableAutomaticScroll
      keyboardShouldPersistTaps='handled'
      contentContainerStyle={styles.container}
      style={styles.containerKeyBoard}
    >
      <View style={styles.logoWrapper}>
        <LogoIcon />
        <AppText size={35} style={styles.appName}>
          EventHub
        </AppText>
      </View>
      <View style={styles.loginForm}>
        <TextInputUI wrapperStyle={styles.wrapperTextInput} iconLeft={<EmailIcon />} />
        <TextInputUI
          type={ETypeField.PASSWORD}
          wrapperStyle={styles.wrapperTextInput}
          iconLeft={<LockIcon />}
        />
      </View>
      <View style={styles.bodyContainer}>
        <View style={styles.remember}>
          <AppSwitch active={remember} onValueChange={toggleRememberMe} />
          <AppText style={styles.rememberText}>Remember Me</AppText>
        </View>
        <AppText>Forgot Password?</AppText>
      </View>
      <Button
        text='Sign In'
        buttonColor={theme.colors.blueOne}
        containerStyle={styles.signInBtn}
      ></Button>
      <AppText style={styles.noAccountText}>
        Don't have an account? <AppText color={theme.colors.blueOne}>Sign up</AppText>
      </AppText>
    </KeyboardAwareScrollView>
  );
});

SignInScreen.displayName = 'SignInScreen';
export default SignInScreen;
