import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { StyledHomePageContainer } from './styles'
import { toast } from 'react-toastify'

import InputFile from '../library/inputFile'
import { getCookie } from '../Utils/utils'

const HomePageContainer = ({
}) => {

    const [csrftoken, setCsrftoken] = useState(null)

    useEffect(() => {
        const csrftoken = getCookie('csrftoken')
        setCsrftoken(csrftoken)
    }, [])

    const [file, setFile] = useState(null);

    const handleSubmit = async (e) => {
      e.preventDefault()
  
      const formData = new FormData()
      formData.append('csv_arq', file)
      formData.append('csrfmiddlewaretoken', csrftoken)
  
      try {
        const response = await axios.post('/api/upload/', formData);
        toast.success('Arquivo enviado com sucesso')
      } catch (error) {
        toast.error('Ocorreu um erro ao enviar seu arquivo')
      }
    }

    return (
         <>
            <div>
                <h1>Lorem Ipsum</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque hendrerit augue vitae metus hendrerit, et vulputate elit tempor. Vivamus dolor felis, auctor et maximus vitae, venenatis eget risus. Nulla eget lorem pellentesque, pellentesque lorem ut, pharetra augue. Quisque volutpat malesuada nibh nec lobortis. Cras luctus eleifend dolor eget venenatis. Quisque et bibendum eros. Duis non convallis neque. Nunc luctus consectetur varius. Mauris orci felis, dictum id dolor eu, rutrum bibendum sapien. Sed auctor sodales imperdiet. Nulla placerat dictum urna, eu ullamcorper ligula malesuada et. Fusce gravida est nec euismod vestibulum. Etiam commodo sapien eu est dictum, eu cursus libero vulputate.</p>
            </div>
            <StyledHomePageContainer.Reference>
                <div>
                    <h2>Tabela referência</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque hendrerit augue vitae metus hendrerit, et vulputate elit tempor. Vivamus dolor felis, auctor et maximus vitae, venenatis eget risus.</p>
                </div>
                <div>
                    <img src=''/>
                </div>
            </StyledHomePageContainer.Reference>
            <StyledHomePageContainer.Form onSubmit={handleSubmit}>
                <label> Selecionar arquivo </label>
                <InputFile name='csv_arq' accept=".csv" onChange={(e) => setFile(e.target.files[0])} value={file}/>
                <StyledHomePageContainer.Form.Submit type='submit'>
                    Enviar
                </StyledHomePageContainer.Form.Submit>
            </StyledHomePageContainer.Form>
        </>
    )
}

export default HomePageContainer