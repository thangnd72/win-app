import dayjs from 'dayjs';
import * as Yup from 'yup';

export const createAccountFormSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid input. Please enter a valid email address')
    .required('Required'),
  password: Yup.string()
    .required('Please enter the password')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,16}$)/,
      'Password must have at least 8 characters that include at least 1 lowercase character, 1 uppercase character, 1 number, and 1 special character, maximum number of characters is 16',
    ),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Password does not match')
    .required('Please enter the password again'),
  termsAccepted: Yup.bool().oneOf([true], 'The terms and conditions must be accepted'),
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
