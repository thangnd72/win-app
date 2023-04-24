import { PASSWORD_REGEX } from '@src/helpers/constants';
import dayjs from 'dayjs';
import * as Yup from 'yup';

export const createAccountFormSchema = Yup.object().shape({
  firstName: Yup.string()
    .email('Invalid input. Please enter a valid email address')
    .required('Please enter the first name'),
  lastName: Yup.string()
    .email('Invalid input. Please enter a valid email address')
    .required('Please enter the first name'),
  email: Yup.string()
    .email('Invalid input. Please enter a valid email address')
    .required('Please enter the email'),
  password: Yup.string()
    .required('Please enter the password')
    .matches(
      PASSWORD_REGEX,
      'Your password MUST have at least one UPPERCASE character and one Special (Non-Alphanumeric) character (eg. ! @ # $ % ^ & * )',
    ),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref('password')],
    'Password is not match. Please try again!',
  ),
  // termsAccepted: Yup.bool().oneOf([true], 'The terms and conditions must be accepted'),
});

export const yourInformationSchema = Yup.object().shape({
  title: Yup.string().max(15, 'The maximum length for this field is 15 characters'),
  firstName: Yup.string().required('Please enter the first name'),
  lastName: Yup.string().required('Please enter the last name'),
  dob: Yup.string()
    .required('Please enter the date of birth')
    .test({
      name: 'max',
      exclusive: false,
      params: {},
      message: 'Invalid input. Please enter a valid date of birth',
      test: function (value) {
        if (value && dayjs(value).format('YYYY/MM/DD') > dayjs(new Date()).format('YYYY/MM/DD')) {
          return false;
        }

        return true;
      },
    }),
  phone: Yup.string()
    .min(15, 'Please enter a valid phone number')
    .max(15, 'Please enter a valid phone number')
    .required('Please enter the phone number'),
  occupation: Yup.string()
    .required('Please enter the occupation')
    .max(30, 'The maximum length for this field is 30 characters'),
  address: Yup.string()
    .max(255, 'The maximum length for this field is 255 characters')
    .required('Please enter the address'),
});

export const logInFormSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid input. Please enter a valid email address')
    .required('Please enter your email'),
  password: Yup.string()
    .matches(
      PASSWORD_REGEX,
      'Your password MUST have at least one UPPERCASE character and one Special (Non-Alphanumeric) character (eg. ! @ # $ % ^ & * )',
    )
    .required('Please enter your password'),
});

export const forgotPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid input. Please enter a valid email address')
    .required('Please enter your email'),
});

export const createNewPasswordSchema = Yup.object().shape({
  password: Yup.string()
    .matches(
      PASSWORD_REGEX,
      'Your password MUST have at least one UPPERCASE character and one Special (Non-Alphanumeric) character (eg. ! @ # $ % ^ & * )',
    )
    .required('Please enter your password'),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref('password'), undefined],
    'Password is not match. Please try again!',
  ),
});
