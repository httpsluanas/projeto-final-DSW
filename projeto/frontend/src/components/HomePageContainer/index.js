import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { Formik } from 'formik'
import * as Yup from 'yup'

import { InputFile, Field } from '../library/inputs'
import { getCookie } from '../Utils/utils'
import ValidationModal from './ValidationModal'

import { StyledHomePageContainer } from './styles'

const fileSchema = (required) => {
    return Yup.mixed().test('csv_arq', 'É necessário fornecer um arquivo', (value) => {
      if (!required) {
        return true
      }
      return !!value
    })
  }

const schema = Yup.object().shape({
    fileName: Yup.string(),
    csv_arq: fileSchema(true)
})

const HomePageContainer = ({
}) => {

    const [modalIsOpen, setIsOpen] = useState(false)
    const [userData, setUserData ] = useState(null)

    const openModal = () => setIsOpen(true)

    const closeModal = () => setIsOpen(false)

    const [csrftoken, setCsrftoken] = useState(null)

    useEffect(() => {
        const csrftoken = getCookie('csrftoken')
        setCsrftoken(csrftoken)
    }, [])

    const handleSubmit = async (values, { resetForm }) => {
        const formData = new FormData()
        formData.append('csv_arq', values.csv_arq)
        formData.append('csrfmiddlewaretoken', csrftoken)
    
        try {
          const response = await axios.post('/api/upload/', formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
          })
          if (response.status === 200) {
            const userDataId = response.data.id
            try {
              const userDataResponse = await axios.get(`/api/lista_objetos/${userDataId}/`)
              setUserData(userDataResponse.data)
              openModal()
              resetForm()
            } catch (userDataError) {
              toast.error('Erro ao obter dados do usuário')
            }
          } else {
            toast.error('Ocorreu um erro ao enviar seu arquivo')
          }
        } catch (error) {
          toast.error('Ocorreu um erro ao enviar seu arquivo')
        }
      }

    return (
         <>
            <div>
                <StyledHomePageContainer.Title>Lorem Ipsum</StyledHomePageContainer.Title>
                <StyledHomePageContainer.Paragraph>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque hendrerit augue vitae metus hendrerit, et vulputate elit tempor. Vivamus dolor felis, auctor et maximus vitae, venenatis eget risus. Nulla eget lorem pellentesque, pellentesque lorem ut, pharetra augue. Quisque volutpat malesuada nibh nec lobortis. Cras luctus eleifend dolor eget venenatis. Quisque et bibendum eros. Duis non convallis neque. Nunc luctus consectetur varius. Mauris orci felis, dictum id dolor eu, rutrum bibendum sapien. Sed auctor sodales imperdiet. Nulla placerat dictum urna, eu ullamcorper ligula malesuada et. Fusce gravida est nec euismod vestibulum. Etiam commodo sapien eu est dictum, eu cursus libero vulputate.
                </StyledHomePageContainer.Paragraph>
            </div>
            <StyledHomePageContainer.Reference>
                <div>
                    <StyledHomePageContainer.Reference.Title>
                      Tabela referência
                    </StyledHomePageContainer.Reference.Title>
                    <StyledHomePageContainer.Paragraph>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque hendrerit augue vitae metus hendrerit, et vulputate elit tempor. Vivamus dolor felis, auctor et maximus vitae, venenatis eget risus.
                    </StyledHomePageContainer.Paragraph>
                </div>
                <div>
                    <img src=''/>
                </div>
            </StyledHomePageContainer.Reference>
            <Formik initialValues={{fileName: '', csv_arq: null}}
                    validationSchema={schema}
                    onSubmit={handleSubmit}>
                {({erros, isSubmitting, isValid, dirty, setFieldValue}) => (
                    <StyledHomePageContainer.Form>
                        <Field label='Dê um nome para seu arquivo (opcional)'
                              id='file-name-id'
                              name='fileName'
                              placeholder='Digite um nome para seu arquivo...'/>
                        <Field label='Selecione um arquivo'
                              id='file-id'
                              name='csv_arq'
                              placeholder='Selecionar arquivo...'
                              accept='.csv'
                              onChange={(e) => {
                                setFieldValue('csv_arq', e.currentTarget.files[0])
                              }}
                              as={InputFile}/>
                        <StyledHomePageContainer.Form.Submit type='submit' disabled={!isValid || isSubmitting || !dirty}>
                            Enviar
                        </StyledHomePageContainer.Form.Submit>
                    </StyledHomePageContainer.Form>
                )}
            </Formik>
            <ValidationModal {...{modalIsOpen, closeModal, userData}}/>
        </>
    )
}

export default HomePageContainer