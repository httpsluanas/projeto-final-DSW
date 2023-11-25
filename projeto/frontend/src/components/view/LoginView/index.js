import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { Formik, ErrorMessage, Field } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { Link, useHistory } from 'react-router-dom'

import { usePaths } from '../../Utils/utils'
import { useUser } from '../../Utils/user-utils'
import { ExclamationOctagon, Eye, EyeSlash } from '../../library/icons'

const LoginSchema = Yup.object().shape({
    username: Yup.string().required('Campo obrigatório'),
    password: Yup.string().required('Campo obrigatório'),
})

import { StyledLoginView } from './styles'

const LoginView = () => {
    const paths = usePaths()
    const history = useHistory()
    const { updateUser } = useUser()

    const [showPassword, setShowPassword] = useState(false)

    const handleSubmit = async (values, { setSubmitting, setErrors }) => {
        try {
            const response = await axios.post('/api/login/', values)
            localStorage.setItem('token', response.data.token)
            localStorage.setItem('userInfo', JSON.stringify(response.data.user_info))

            const { token, ...userDetails } = response.data
            updateUser(userDetails)

            history.push(paths.homePage())
        } catch (error) {
            toast.error('Falha no login. Confira suas credenciais')
            setErrors({ general: 'Login failed. Please check your credentials.' })
        } finally {
            setSubmitting(false)
        }
    }

    return (
        <StyledLoginView>
            <StyledLoginView.Container>
                <Formik
                    initialValues={{ username: '', password: '' }}
                    validationSchema={LoginSchema}
                    onSubmit={handleSubmit}>
                    {({ errors, isSubmitting, isValid, dirty }) => (
                        <StyledLoginView.Form>
                            <StyledLoginView.Form.FieldContainer>
                                <StyledLoginView.Form.Label htmlFor="username">
                                    Usuário:
                                </StyledLoginView.Form.Label>
                                <StyledLoginView.Field type="text"
                                                    name="username"
                                                    placeholder="Digite seu usuário..."
                                                    $hasError={errors.username} />
                                <ErrorMessage name="username"
                                            render={msg => <StyledLoginView.ErrorMessage><ExclamationOctagon aria-hidden='true'/> {msg}</StyledLoginView.ErrorMessage>} />
                            </StyledLoginView.Form.FieldContainer>
                            <StyledLoginView.Form.FieldContainer>
                                <StyledLoginView.Form.Label htmlFor="password">
                                    Senha:
                                </StyledLoginView.Form.Label>
                                <StyledLoginView.Container.Password $hasError={errors.password}>
                                    <Field type={showPassword ? 'text' : 'password'}
                                           name="password"
                                           placeholder="Digite sua senha..." />
                                    <StyledLoginView.ShowPasswordBtn size='SMALL' onlyIcon onClick={() => setShowPassword(!showPassword)}>
                                        {showPassword ? <EyeSlash/> : <Eye/>}
                                    </StyledLoginView.ShowPasswordBtn>
                                </StyledLoginView.Container.Password>
                                <ErrorMessage name="password"
                                              render={msg => <StyledLoginView.ErrorMessage><ExclamationOctagon aria-hidden='true'/> {msg}</StyledLoginView.ErrorMessage>} />
                                {/* <StyledLoginView.ForgotPassword href=''>
                                    Esqueceu a senha?
                                </StyledLoginView.ForgotPassword> */}
                            </StyledLoginView.Form.FieldContainer>
                            <StyledLoginView.Submit type="submit" disabled={!isValid || isSubmitting || !dirty}>
                                Entrar
                            </StyledLoginView.Submit>
                        </StyledLoginView.Form>
                    )}
                </Formik>
                <StyledLoginView.RegisterMessage>
                    Não tem conta? <Link to={paths.signup()}>Criar conta</Link>
                </StyledLoginView.RegisterMessage>
            </StyledLoginView.Container>
        </StyledLoginView>
    )
}

export default LoginView