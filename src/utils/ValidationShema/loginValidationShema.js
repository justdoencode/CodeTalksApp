
import * as Yup from 'yup';

export default validationSchema = Yup.object().shape({
    useremail: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required')
});