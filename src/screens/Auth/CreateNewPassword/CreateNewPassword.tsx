import { ArrowLeftIcon, LockIcon } from '@src/assets/icons';
import { AppText, Button } from '@src/components';
import theme from '@src/helpers/theme';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import { TextInputUI } from '@src/components';
import { ETypeField } from '@src/components/TextInput/types';
import GlobalNavigation from '@src/helpers/GlobalNavigation';
import { createNewPasswordSchema } from '@src/utils/form-utils';
import { useFormik } from 'formik';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ICreateNewPassword } from './CreateNewPassword.Model';
import styles from './styles';

const ForgotPasswordScreen = React.memo(() => {
  const insets = useSafeAreaInsets();
  const [isSubmitting, setIsSubmitting] = React.useState<boolean>(false);

  const handleCreateNewPassword = React.useCallback(async (values: ICreateNewPassword) => {
    try {
      setIsSubmitting(true);
    } catch (error: any) {
      console.log(error.message);
    } finally {
      setIsSubmitting(false);
    }
  }, []);

  const { handleSubmit, values, handleChange, errors, touched } = useFormik({
    initialValues: {
      password: '',
      confirmPassword: '',
    },
    onSubmit: handleCreateNewPassword,
    validationSchema: createNewPasswordSchema,
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
        <AppText size={28} style={styles.newPwTitle}>
          New password
        </AppText>
        <AppText style={styles.descriptionText}>Create your new password to Login</AppText>
        <TextInputUI
          type={ETypeField.PASSWORD}
          wrapperStyle={styles.wrapperTextInput}
          iconLeft={<LockIcon />}
          textValue={values.password}
          onChangeValue={handleChange('password')}
          errorMessage={touched.password && errors.password}
          placeHolder='New password'
        />
        <TextInputUI
          type={ETypeField.PASSWORD}
          wrapperStyle={styles.wrapperTextInput}
          iconLeft={<LockIcon />}
          textValue={values.password}
          onChangeValue={handleChange('confirmPassword')}
          errorMessage={touched.confirmPassword && errors.confirmPassword}
          placeHolder='Confirm new password'
        />
        <Button
          text='Reset password'
          buttonColor={theme.colors.blueOne}
          containerStyle={styles.submitBtn}
          textStyle={styles.resetText}
          loading={isSubmitting}
          onPress={handleSubmit}
        />
      </View>
    </KeyboardAwareScrollView>
  );
});

ForgotPasswordScreen.displayName = 'ForgotPasswordScreen';
export default ForgotPasswordScreen;
