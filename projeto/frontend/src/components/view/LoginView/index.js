import React from 'react'
import { Formik, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { Link, useHistory } from 'react-router-dom'
import { usePaths } from '../../Utils/utils'
import { useUser } from '../../Utils/user-utils'
import { ExclamationOctagon } from '../../library/icons'

const LoginSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
})

import { StyledLoginView } from './styles'

const LoginView = () => {
    const paths = usePaths()
    const history = useHistory()
    const { updateUser } = useUser()

    const handleSubmit = async (values, { setSubmitting, setErrors }) => {
        try {
            const response = await axios.post('/api/login/', values)
            localStorage.setItem('token', response.data.token)
            localStorage.setItem('userInfo', JSON.stringify(response.data.user_info))

            const { token, ...userDetails } = response.data
            updateUser(userDetails)

            history.push(paths.homePage())
        } catch (error) {
            setErrors({ general: 'Login failed. Please check your credentials.' })
        } finally {
            setSubmitting(false)
        }
    }

    return (
        <StyledLoginView>
            <Formik
                initialValues={{ username: '', password: '' }}
                validationSchema={LoginSchema}
                onSubmit={handleSubmit}
            >
                {({ errors, isSubmitting }) => (
                    <StyledLoginView.Form>
                        <div>
                            <StyledLoginView.Form.Label htmlFor="username">
                                Usuário:
                            </StyledLoginView.Form.Label>
                            <StyledLoginView.Field type="text"
                                                   name="username"
                                                   placeholder="email@email.com"
                                                   hasError={errors.username} />
                            <ErrorMessage name="username"
                                          render={msg => <StyledLoginView.ErrorMessage><ExclamationOctagon aria-hidden='true'/> {msg}</StyledLoginView.ErrorMessage>} />
                        </div>
                        <div>
                            <StyledLoginView.Form.Label htmlFor="password">
                                Senha:
                            </StyledLoginView.Form.Label>
                            <StyledLoginView.Field type="password"
                                                   name="password"
                                                   placeholder="********" />
                            <StyledLoginView.ErrorMessage name="password" component="p" />
                            <StyledLoginView.ForgotPassword href=''>
                                Esqueceu a senha?
                            </StyledLoginView.ForgotPassword>
                        </div>
                        <StyledLoginView.Submit type="submit" disabled={isSubmitting}>
                            Entrar
                        </StyledLoginView.Submit>
                        <StyledLoginView.RegisterMessage>
                            Não tem conta? <Link to={paths.signup()}>Criar conta</Link>
                        </StyledLoginView.RegisterMessage>
                    </StyledLoginView.Form>
                )}
            </Formik>
        </StyledLoginView>
    )
}

export default LoginView