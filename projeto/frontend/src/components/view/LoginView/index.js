import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import { usePaths } from '../../Utils/utils';
import { useUser } from '../../Utils/user-utils';

const LoginSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
});

const LoginView = () => {
    const paths = usePaths();
    const history = useHistory();
    const { updateUser } = useUser();

    const handleSubmit = async (values, { setSubmitting, setErrors }) => {
        try {
            const response = await axios.post('/api/login/', values);
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('userInfo', JSON.stringify(response.data.user_info));

            const { token, ...userDetails } = response.data;
            updateUser(userDetails);

            history.push(paths.homePage());
        } catch (error) {
            setErrors({ general: 'Login failed. Please check your credentials.' });
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <>
            <h2>Login</h2>
            <Formik
                initialValues={{ username: '', password: '' }}
                validationSchema={LoginSchema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <div>
                            <label htmlFor="username">Username:</label>
                            <Field type="text" name="username" />
                            <ErrorMessage name="username" component="div" />
                        </div>
                        <div>
                            <label htmlFor="password">Password:</label>
                            <Field type="password" name="password" />
                            <ErrorMessage name="password" component="div" />
                        </div>
                        <button type="submit" disabled={isSubmitting}>
                            Login
                        </button>
                        <Link to={paths.signup()}>Criar conta</Link>
                    </Form>
                )}
            </Formik>
        </>
    );
};

export default LoginView;
