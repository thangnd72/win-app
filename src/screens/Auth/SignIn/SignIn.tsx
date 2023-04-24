import { ArrowRight3Icon, EmailIcon, LockIcon, LogoIcon } from '@src/assets/icons';
import { AppSwitch, AppText, Button } from '@src/components';
import theme from '@src/helpers/theme';
import React from 'react';
import { View } from 'react-native';

import { TextInputUI } from '@src/components';
import { ETypeField } from '@src/components/TextInput/types';
import GlobalNavigation from '@src/helpers/GlobalNavigation';
import { EGuestScreenList } from '@src/navigators/RouteName';
import { logInFormSchema } from '@src/utils/form-utils';
import { useFormik } from 'formik';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { ILogInForm } from './SignIn.Modal';
import styles from './styles';

const SignInScreen = React.memo(() => {
  const [remember, setRemember] = React.useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = React.useState<boolean>(false);

  const toggleRememberMe = React.useCallback(() => {
    setRemember((prev) => !prev);
  }, []);

  const handleLogIn = async (values: ILogInForm) => {
    try {
      setIsSubmitting(true);
    } catch (error: any) {
      console.log(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const { handleSubmit, values, handleChange, errors, touched } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: handleLogIn,
    validationSchema: logInFormSchema,
  });

  const onNavigateForgotPasswordScreen = React.useCallback(() => {
    GlobalNavigation.navigate(EGuestScreenList.FORGOT_PASSWORD_SCREEN);
  }, []);

  const onNavigateSignUpScreen = React.useCallback(() => {
    GlobalNavigation.navigate(EGuestScreenList.SIGN_UP_SCREEN);
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
        <AppText size={24} style={styles.signInTitle}>
          Sign in
        </AppText>
        <TextInputUI
          wrapperStyle={styles.wrapperTextInput}
          iconLeft={<EmailIcon />}
          textValue={values.email}
          onChangeValue={handleChange('email')}
          errorMessage={touched.email && errors.email}
          placeHolder='Email'
        />
        <TextInputUI
          type={ETypeField.PASSWORD}
          wrapperStyle={styles.wrapperTextInput}
          iconLeft={<LockIcon />}
          textValue={values.password}
          onChangeValue={handleChange('password')}
          errorMessage={touched.password && errors.password}
          placeHolder='Password'
        />
      </View>
      <View style={styles.bodyContainer}>
        <View style={styles.remember}>
          <AppSwitch active={remember} onValueChange={toggleRememberMe} />
          <AppText style={styles.rememberText}>Remember Me</AppText>
        </View>
        <AppText onPress={onNavigateForgotPasswordScreen}>Forgot Password?</AppText>
      </View>
      <Button
        text='Sign In'
        buttonColor={theme.colors.blueOne}
        containerStyle={styles.signInBtn}
        textStyle={styles.signInText}
        loading={isSubmitting}
        onPress={handleSubmit}
        iconRight={<ArrowRight3Icon />}
      />
      <AppText style={styles.noAccountText}>
        Don't have an account?{' '}
        <AppText color={theme.colors.blueOne} onPress={onNavigateSignUpScreen}>
          Sign up
        </AppText>
      </AppText>
    </KeyboardAwareScrollView>
  );
});

SignInScreen.displayName = 'SignInScreen';
export default SignInScreen;
