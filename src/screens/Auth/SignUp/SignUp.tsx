import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { ArrowLeftIcon, ArrowRight3Icon, EmailIcon } from '@src/assets/icons';
import { AppText, Button, TextInputUI } from '@src/components';
import GlobalNavigation from '@src/helpers/GlobalNavigation';
import theme from '@src/helpers/theme';
import { createAccountFormSchema } from '@src/utils/form-utils';
import { useFormik } from 'formik';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ISignUpForm } from './SignUp.Modal';
import styles from './styles';

const SignUpScreen = React.memo(() => {
  const insets = useSafeAreaInsets();
  const [isSubmitting, setIsSubmitting] = React.useState<boolean>(false);

  const handleSignUp = async (values: ISignUpForm) => {
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
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    onSubmit: handleSignUp,
    validationSchema: createAccountFormSchema,
  });

  const onGoBack = React.useCallback(() => {
    GlobalNavigation.goBack();
  }, []);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.6}
        style={[styles.backWrapper, { top: insets.top + 10 }]}
        onPress={() => GlobalNavigation.goBack()}
      >
        <ArrowLeftIcon />
      </TouchableOpacity>
      <View style={styles.bodyContainer}>
        <AppText size={24} style={styles.signUpTitle}>
          Sign up
        </AppText>
        <TextInputUI
          wrapperStyle={styles.wrapperTextInput}
          iconLeft={<EmailIcon />}
          textValue={values.firstName}
          onChangeValue={handleChange('firstName')}
          errorMessage={touched.firstName && errors.firstName}
          placeHolder='First name'
        />
        <TextInputUI
          wrapperStyle={styles.wrapperTextInput}
          iconLeft={<EmailIcon />}
          textValue={values.lastName}
          onChangeValue={handleChange('lastName')}
          errorMessage={touched.lastName && errors.lastName}
          placeHolder='Last name'
        />
        <TextInputUI
          wrapperStyle={styles.wrapperTextInput}
          iconLeft={<EmailIcon />}
          textValue={values.email}
          onChangeValue={handleChange('email')}
          errorMessage={touched.email && errors.email}
          placeHolder='Email'
        />
        <TextInputUI
          wrapperStyle={styles.wrapperTextInput}
          iconLeft={<EmailIcon />}
          textValue={values.password}
          onChangeValue={handleChange('password')}
          errorMessage={touched.password && errors.password}
          placeHolder='Password'
        />
        <TextInputUI
          wrapperStyle={styles.wrapperTextInput}
          iconLeft={<EmailIcon />}
          textValue={values.confirmPassword}
          onChangeValue={handleChange('confirmPassword')}
          errorMessage={touched.confirmPassword && errors.confirmPassword}
          placeHolder='Confirm password'
        />
        <Button
          text='Sign Up'
          buttonColor={theme.colors.blueOne}
          containerStyle={styles.signUpBtn}
          textStyle={styles.signUpText}
          loading={isSubmitting}
          onPress={handleSubmit}
          iconRight={<ArrowRight3Icon />}
        />
        <AppText style={styles.alreadyText}>
          Already have an account?{' '}
          <AppText color={theme.colors.blueOne} onPress={onGoBack}>
            Sign in
          </AppText>
        </AppText>
      </View>
    </View>
  );
});

export default SignUpScreen;
