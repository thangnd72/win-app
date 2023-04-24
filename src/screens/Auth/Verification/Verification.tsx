import { ArrowLeftIcon, ArrowRight3Icon } from '@src/assets/icons';
import { AppText, Button } from '@src/components';
import theme from '@src/helpers/theme';
import React from 'react';
import { SafeAreaView, TouchableOpacity, View } from 'react-native';

import GlobalNavigation from '@src/helpers/GlobalNavigation';
import { EGuestScreenList } from '@src/navigators/RouteName';
import {
  CodeField,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styles from './styles';

const VerificationScreen = React.memo(() => {
  const insets = useSafeAreaInsets();
  const [value, setValue] = React.useState<string>('');
  const [isSubmitting, setIsSubmitting] = React.useState<boolean>(false);
  const ref = useBlurOnFulfill({ value, cellCount: 4 });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const handleVerifyCode = React.useCallback(() => {
    try {
      setIsSubmitting(true);
      GlobalNavigation.navigate(EGuestScreenList.CREATE_NEW_PASSWORD_SCREEN);
    } catch (error) {
      console.log('📢[Verification.tsx:35]: error: ', error);
    } finally {
      setIsSubmitting(false);
    }
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.6}
        style={[styles.backWrapper, { top: insets.top + 10 }]}
        onPress={() => GlobalNavigation.goBack()}
      >
        <ArrowLeftIcon />
      </TouchableOpacity>
      <View style={styles.verifyCodeContainer}>
        <AppText size={28} style={styles.verifyTitle}>
          Verification
        </AppText>
        <AppText style={styles.descriptionText} size={15}>
          We've send you the verification code on{' '}
          <AppText size={15} style={styles.emailText}>
            {'thangnd@yopmail.com'}
          </AppText>
        </AppText>
        <View style={styles.verifyCodeWrapper}>
          <CodeField
            ref={ref}
            {...props}
            value={value}
            onChangeText={setValue}
            cellCount={4}
            rootStyle={styles.codeFieldRoot}
            keyboardType='number-pad'
            textContentType='oneTimeCode'
            renderCell={({ index, symbol, isFocused }) => (
              <AppText
                key={index}
                style={[styles.cell, isFocused && styles.focusCell]}
                onLayout={getCellOnLayoutHandler(index)}
              >
                {symbol || (isFocused ? null : '-')}
              </AppText>
            )}
          />
        </View>
        <Button
          text='Continue'
          buttonColor={theme.colors.blueOne}
          containerStyle={styles.submitBtn}
          textStyle={styles.continueText}
          loading={isSubmitting}
          onPress={handleVerifyCode}
          iconRight={<ArrowRight3Icon />}
        />
      </View>
    </SafeAreaView>
  );
});

VerificationScreen.displayName = 'VerificationScreen';
export default VerificationScreen;
