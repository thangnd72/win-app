import { ArrowLeftIcon, ArrowRight3Icon, EmailIcon } from '@src/assets/icons';
import { AppText, Button } from '@src/components';
import theme from '@src/helpers/theme';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import { TextInputUI } from '@src/components';
import GlobalNavigation from '@src/helpers/GlobalNavigation';
import { EGuestScreenList } from '@src/navigators/RouteName';
import { forgotPasswordSchema } from '@src/utils/form-utils';
import { useFormik } from 'formik';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styles from './styles';

const ForgotPasswordScreen = React.memo(() => {
  const insets = useSafeAreaInsets();
  const [isSubmitting, setIsSubmitting] = React.useState<boolean>(false);

  const handleForgotPassword = React.useCallback(async (values: { email: string }) => {
    try {
      setIsSubmitting(true);
      console.log('values', values);
      GlobalNavigation.navigate(EGuestScreenList.VERIFICATION_SCREEN);
    } catch (error: any) {
      console.log(error.message);
    } finally {
      setIsSubmitting(false);
    }
  }, []);

  const { handleSubmit, values, handleChange, errors, touched } = useFormik({
    initialValues: {
      email: 'thangnd@yopmail.com',
    },
    onSubmit: handleForgotPassword,
    validationSchema: forgotPasswordSchema,
  });

  return (
    <KeyboardAwareScrollView
      enableAutomaticScroll
      keyboardShouldPersistTaps='handled'
      contentContainerStyle={styles.container}
      style={styles.containerKeyBoard}
    >
      <TouchableOpacity
        activeOpacity={0.6}
        style={[styles.backWrapper, { top: insets.top + 10 }]}
        onPress={() => GlobalNavigation.goBack()}
      >
        <ArrowLeftIcon />
      </TouchableOpacity>
      <View style={styles.bodyContainer}>
        <AppText size={28} style={styles.forgotTitle}>
          Forgot password
        </AppText>
        <AppText style={styles.descriptionText}>
          Type your email, we will send you verification code via email
        </AppText>
        <TextInputUI
          wrapperStyle={styles.wrapperTextInput}
          iconLeft={<EmailIcon />}
          textValue={values.email}
          onChangeValue={handleChange('email')}
          errorMessage={touched.email && errors.email}
          placeHolder='Email'
        />
        <Button
          text='Verify'
          buttonColor={theme.colors.blueOne}
          containerStyle={styles.submitBtn}
          textStyle={styles.verifyText}
          loading={isSubmitting}
          onPress={handleSubmit}
          iconRight={<ArrowRight3Icon />}
        />
      </View>
    </KeyboardAwareScrollView>
  );
});

ForgotPasswordScreen.displayName = 'ForgotPasswordScreen';
export default ForgotPasswordScreen;
