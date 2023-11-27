import React, { useState } from 'react'
import { Formik } from 'formik'
import { toast } from 'react-toastify'
import * as Yup from 'yup'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

import { usePaths } from '../Utils/utils'
import { Eye, EyeSlash, AngleLeft } from '../library/icons'
import { Field } from '../library/inputs'
import { NoBgButton } from '../library/buttons'

import { StyledRegisterContainer } from './styles'

const RegisterContainer = () => {
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
        <StyledRegisterContainer>
            <StyledRegisterContainer.Container>
                <StyledRegisterContainer.Back to={paths.login()}><AngleLeft/> Voltar para o login</StyledRegisterContainer.Back>
                <StyledRegisterContainer.Title>Crie sua conta</StyledRegisterContainer.Title>
                <Formik
                    initialValues={{ username: '', email: '', password: '' }}
                    validationSchema={registerSchema}
                    onSubmit={handleRegister}
                >
                    {({ errors, isSubmitting, isValid, dirty }) => (
                        <StyledRegisterContainer.Form>
                            <Field id='new-username-id'
                                   type='text'
                                   name='username'
                                   placeholder='Digite seu novo usuário...'
                                   label='Crie seu usuário:'
                                   error={errors.username}
                                   autocomplete='on'/>
                            <Field id='new-email-id'
                                   type='email'
                                   name='email'
                                   placeholder='email@email.com'
                                   label='Escolha seu e-mail:'
                                   error={errors.email}/>
                            <Field id='new-password-id'
                                   type={showPassword ? 'text' : 'password'}
                                   name='password'
                                   placeholder='Digite sua senha'
                                   label='Digite uma senha:'
                                   autocomplete='new-password'
                                   after={<NoBgButton size='SMALL' onClick={() => setShowPassword(!showPassword)}>{showPassword ? <EyeSlash/> : <Eye/>}</NoBgButton>}/>
                            <StyledRegisterContainer.Submit type="submit" disabled={!isValid || isSubmitting || !dirty}>
                                Criar conta
                            </StyledRegisterContainer.Submit>
                        </StyledRegisterContainer.Form>
                    )}
                </Formik>
            </StyledRegisterContainer.Container>
        </StyledRegisterContainer>
    )
}

export default RegisterContainer
