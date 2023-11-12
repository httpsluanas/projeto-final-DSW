import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { usePaths } from '../../Utils/utils';

const RegisterSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
});

const RegisterView = () => {
    const paths = usePaths();
    const history = useHistory();

    const handleRegister = async (values, { setSubmitting }) => {
        try {
            const response = await axios.post('/api/register/', values);
            console.log(response.data);
            history.push(paths.login());
        } catch (error) {
            console.error('Registration failed:', error.response?.data);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div>
            <h2>Register</h2>
            <Formik
                initialValues={{ username: '', email: '', password: '' }}
                validationSchema={RegisterSchema}
                onSubmit={handleRegister}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <div>
                            <label htmlFor="username">Username:</label>
                            <Field type="text" name="username" />
                            <ErrorMessage name="username" component="div" />
                        </div>

                        <div>
                            <label htmlFor="email">Email:</label>
                            <Field type="text" name="email" />
                            <ErrorMessage name="email" component="div" />
                        </div>

                        <div>
                            <label htmlFor="password">Password:</label>
                            <Field type="password" name="password" />
                            <ErrorMessage name="password" component="div" />
                        </div>

                        <button type="submit" disabled={isSubmitting}>
                            Register
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default RegisterView;
