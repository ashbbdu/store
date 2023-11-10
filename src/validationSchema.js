import * as Yup from 'yup';
export const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('First Name is Required'),
    lastName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Last Name is Required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password : Yup.string().required('Password is required'),
    // selectedValues : Yup.array().min(1, "Select City").required("").required("Required"),
  });