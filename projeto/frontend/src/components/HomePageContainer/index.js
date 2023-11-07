import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { StyledHomePageContainer } from './styles'
import { toast } from 'react-toastify'

import InputFile from '../library/inputFile'
import DjangoCSRFToken from '../Utils/DjangoCSRFToken'
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
        toast.success('foi porra vai se fude')
      } catch (error) {
        toast.error('erro >:(')
      }
    }

    return (
         <>
            <div>
                <h1>Título</h1>
                <p>esse sistema tem como objetivo fazer isso e aquilo e tambem aquilo outro e ah n sei oq n sei oq esse sistema auxiliara voce a fqazer isso e aquilo na area tal e os caralho e aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa quero que tenha mais linhaaaaaaaaaaaaaaaaaaaaas mas tudo bem se n tiver boa noite a todos e todas espero que gosterm e que façam bom uso deste belo sistema</p>
            </div>
            <StyledHomePageContainer.Reference>
                <div>
                    <h2>Tabela referência</h2>
                    <p>essa tabela bla bla bla blab alb alb alb alb </p>
                </div>
                <div>
                    fotinha da tabela
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