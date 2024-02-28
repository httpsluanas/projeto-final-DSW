import React, { useEffect, useState } from 'react'
import { Formik, Form, Field } from 'formik'
import { toast } from 'react-toastify'

import Slider from '../../library/slider'
import Loader from '../../library/loader'

import { StyledValidationModal } from './styles'

const ValidationModal = ({
    modalIsOpen,
    closeModal,
    userData
}) => {

    const [defaultList, setDefaultList] = useState()
    const [isFetching, setIsFetching] = useState(true)

    const [currentSlide, setCurrentSlide] = useState(0)

    const fetchObjetos = async () => {
        try {
            setIsFetching(true)
              const response = await fetch('/api/campos_tabelas/')
            const data = await response.json()
            setDefaultList(data)
        } catch (error) {
            toast.error('Erro ao buscar objetos')
        } finally {
            setIsFetching(false)
        }
      }

    useEffect(() => {
      fetchObjetos()
    }, [])

    const initialValues = !!defaultList ? defaultList.reduce((acc, modelo) => {
        acc[modelo.name] = modelo.fields.reduce((fields, campo) => {
            fields[campo] = ''
            return fields
        }, {})
    
        return acc
    }, {}) : []

    const handleSubmit = async (values) => {
        try {
            const response = await fetch('/api/processar_formulario/', {
                method: 'POST',
                body: JSON.stringify(values),
            });
    
            if (response.ok) {
                toast.success('Dados enviados com sucesso!')
                closeModal()
            } else {
                toast.error('Erro ao enviar dados.')
            }
        } catch (error) {
            toast.error('Erro ao enviar dados')
        }
    }

    return (
        <StyledValidationModal isOpen={modalIsOpen}
                               onClose={closeModal}
                               title={'Valide seus dados'}
                               subtitle={'Lorem ipsum dolor sit amet consectetur. Nisi nec quis sagittis placerat amet amet ridiculus lorem.'}
                               primaryButtonLabel={'Enviar'}
                               btnType={'submit'}>
            {isFetching ? <Loader/> : (
                <Formik initialValues={initialValues}
                        onSubmit={handleSubmit}>
                    {({setFieldValue}) => (
                        <Form id={'validation-form-id'}>
                            <Slider totalSlides={defaultList.length} {...{currentSlide, setCurrentSlide}}>
                                {defaultList.map(dl => (
                                    <StyledValidationModal.Container key={dl.name}>
                                        <StyledValidationModal.List>
                                            <StyledValidationModal.List.Title>
                                                Modelo ISO
                                            </StyledValidationModal.List.Title>
                                            {dl.fields.map((field, i) =>
                                                <li key={i}>
                                                    <StyledValidationModal.List.FakeSelect>
                                                        {field}
                                                    </StyledValidationModal.List.FakeSelect>
                                                </li>
                                            )}
                                        </StyledValidationModal.List>
                                        <StyledValidationModal.List>
                                            <StyledValidationModal.List.Title>
                                                Seus dados
                                            </StyledValidationModal.List.Title>
                                            {dl.fields.map((field, i) =>
                                                <li key={`userField-${i}`}>
                                                    <Field component={StyledValidationModal.Select}
                                                           name={`${dl.name}.${field}`}
                                                           options={userData.map(data => ({value: data, label: data}))}
                                                           placeholder='Selecione...'
                                                           onChange={(e) => setFieldValue(`${dl.name}.${field}`, e.value)} />
                                                </li>
                                            )}
                                        </StyledValidationModal.List>
                                    </StyledValidationModal.Container>
                                ))}
                            </Slider>
                    </Form>
                    )}
                </Formik>
            )}
        </StyledValidationModal>
    )
}

export default ValidationModal