import React, { useState, useRef, useEffect } from 'react'
import { toast } from 'react-toastify'
import { Formik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { Link, useHistory } from 'react-router-dom'

import { usePaths } from '../Utils/utils'
import { useUser } from '../Utils/user-utils'
import { Eye, EyeSlash } from '../library/icons'
import { Field } from '../library/inputs'

const schema = Yup.object().shape({
    username: Yup.string().required('Campo obrigatório'),
    password: Yup.string().required('Campo obrigatório'),
})

import { StyledLoginContainer } from './styles'
import { NoBgButton } from '../library/buttons'

const LoginContainer = () => {
    const paths = usePaths()
    const history = useHistory()
    const { updateUser } = useUser()

    const isMounted = useRef(true)
    const [showPassword, setShowPassword] = useState(false)

    useEffect(() => {
        return () => isMounted.current = false
    }, [])

    const handleSubmit = async (values, { setSubmitting, setErrors }) => {
        try {
            const response = await axios.post('/api/login/', values)
            if (isMounted.current) {
                localStorage.setItem('token', response.data.token)
                localStorage.setItem('userInfo', JSON.stringify(response.data.user_info))

                const { token, ...userDetails } = response.data
                updateUser(userDetails)

                history.push(paths.home())
            }
        } catch (error) {
            if (isMounted.current) {
                toast.error('Falha no login. Confira suas credenciais')
                setErrors({ general: 'Falha no login. Confira suas credenciais' })
            }
        } finally {
            if (isMounted.current) {
                setSubmitting(false)
            }
        }
    }

    return (
        <StyledLoginContainer>
            <StyledLoginContainer.Container>
                <Formik
                    initialValues={{ username: '', password: '' }}
                    validationSchema={schema}
                    onSubmit={handleSubmit}>
                    {({ errors, isSubmitting, isValid, dirty }) => (
                        <StyledLoginContainer.Form>
                                <Field type='text'
                                       name='username'
                                       id='username-id'
                                       label='Usuário'
                                       error={errors.username}
                                       placeholder='Digite seu usuário...'
                                       autocomplete="on"/>
                                <Field type={showPassword ? 'text' : 'password'}
                                       name="password"
                                       id='password-id'
                                       label='Senha'
                                       autocomplete="current-password"
                                       after={<NoBgButton size='SMALL' onClick={() => setShowPassword(!showPassword)}>{showPassword ? <EyeSlash/> : <Eye/>}</NoBgButton>}
                                       placeholder="Digite sua senha..."
                                       error={errors.password}/>
                            <StyledLoginContainer.Submit type="submit" disabled={!isValid || isSubmitting || !dirty}>
                                Entrar
                            </StyledLoginContainer.Submit>
                        </StyledLoginContainer.Form>
                    )}
                </Formik>
                <StyledLoginContainer.RegisterMessage>
                    Não tem conta? <Link to={paths.signup()}>Criar conta</Link>
                </StyledLoginContainer.RegisterMessage>
            </StyledLoginContainer.Container>
        </StyledLoginContainer>
    )
}

export default LoginContainer