import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { toast } from 'react-toastify'
import * as Yup from 'yup'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

import { usePaths } from '../../Utils/utils'
import { ExclamationOctagon, Eye, EyeSlash, AngleLeft } from '../../library/icons'

import { StyledRegisterView } from './styles'

const RegisterView = () => {
    const paths = usePaths()
    const history = useHistory()

    const [showPassword, setShowPassword] = useState(false)

    const registerSchema = Yup.object().shape({
        email: Yup.string()
          .email('Formato de e-mail inválido')
          .test('availability', 'E-mail já cadastrado', async function (value) {
            if (!value) return true
    
            try {
              const response = await axios.get('/api/check_availability/')
              const { emails } = response.data
              return !emails.includes(value)
            } catch (error) {
              console.error('Erro ao verificar disponibilidade de e-mail:', error)
              return false
            }
          }),
    
        username: Yup.string()
          .test('availability', 'Nome de usuário já cadastrado', async function (value) {
            if (!value) return true
    
            try {
              const response = await axios.get('/api/check_availability/')
              const { usernames } = response.data
              return !usernames.includes(value)
            } catch (error) {
              console.error('Erro ao verificar disponibilidade de nome de usuário:', error)
              return false
            }
          }),
          password: Yup.string().required('Campo obrigatório')
      })


    const handleRegister = async (values, { setSubmitting }) => {
        try {
            const response = await axios.post('/api/register/', values)
            history.push(paths.login())
        } catch (error) {
            toast.error(error.response?.data)
        } finally {
            setSubmitting(false)
        }
    }

    return (
        <StyledRegisterView>
            <StyledRegisterView.Container>
                <StyledRegisterView.Back to={paths.login()}><AngleLeft/> Voltar para o login</StyledRegisterView.Back>
                <StyledRegisterView.Title>Crie sua conta</StyledRegisterView.Title>
                <Formik
                    initialValues={{ username: '', email: '', password: '' }}
                    validationSchema={registerSchema}
                    onSubmit={handleRegister}
                >
                    {({ errors, isSubmitting, isValid, dirty }) => (
                        <StyledRegisterView.Form>
                            <StyledRegisterView.Form.FieldContainer>
                                <StyledRegisterView.Form.Label htmlFor="username">
                                    Usuário:
                                </StyledRegisterView.Form.Label>
                                <StyledRegisterView.Field type="text"
                                                          name="username"
                                                          placeholder="MeuUsuario"/>
                                <ErrorMessage name="username"
                                              render={msg => (
                                                <StyledRegisterView.ErrorMessage>
                                                    <ExclamationOctagon/>
                                                    {msg}
                                                </StyledRegisterView.ErrorMessage>
                                              )} />
                            </StyledRegisterView.Form.FieldContainer>
                            <StyledRegisterView.Form.FieldContainer>
                                <StyledRegisterView.Form.Label htmlFor="email">
                                    E-mail:
                                </StyledRegisterView.Form.Label>
                                <StyledRegisterView.Field type="text"
                                                          name="email"
                                                          placeholder="email@email.com"/>
                                <ErrorMessage name="email"
                                              render={msg => (
                                                <StyledRegisterView.ErrorMessage>
                                                    <ExclamationOctagon/>
                                                    {msg}
                                                </StyledRegisterView.ErrorMessage>
                                              )} />
                            </StyledRegisterView.Form.FieldContainer>
                            <StyledRegisterView.Form.FieldContainer>
                                <StyledRegisterView.Form.Label htmlFor="password">
                                    Senha:
                                </StyledRegisterView.Form.Label>
                                <StyledRegisterView.Container.Password>
                                    <Field type={showPassword ? 'text' : 'password'}
                                           name="password"
                                           placeholder="Digite sua senha..." />
                                    <StyledRegisterView.ShowPasswordBtn size='SMALL' onlyIcon onClick={() => setShowPassword(!showPassword)}>
                                        {showPassword ? <EyeSlash/> : <Eye/>}
                                    </StyledRegisterView.ShowPasswordBtn>
                                </StyledRegisterView.Container.Password>
                                <ErrorMessage name="password"
                                              render={msg => (
                                                <StyledRegisterView.ErrorMessage>
                                                    <ExclamationOctagon/>
                                                    {msg}
                                                </StyledRegisterView.ErrorMessage>
                                              )} />
                            </StyledRegisterView.Form.FieldContainer>

                            <StyledRegisterView.Submit type="submit" disabled={!isValid || isSubmitting || !dirty}>
                                Criar conta
                            </StyledRegisterView.Submit>
                        </StyledRegisterView.Form>
                    )}
                </Formik>
            </StyledRegisterView.Container>
        </StyledRegisterView>
    )
}

export default RegisterView
