import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

import { Pen, TrashAlt } from '../library/icons'
import Modal from '../library/modals'
import { PrimaryButton, SecondaryButton } from '../library/buttons'
import Loader from '../library/loader'

import { StyledHistoryContainer } from './styles'

const HistoryContainer = ({
}) => {

    const [historic, setHistoric] = useState()
    const [isFetching, setIsFetching] = useState(true)

    const [modalIsOpen, setIsOpen] = useState(false)
    const [modalData, setModalData] = useState('')

    const [editingNameId, setEditingNameId] = useState(null)
    const [newName, setNewName] = useState(null)
    
    const openModal = (data) => {
        setIsOpen(true)
        setModalData(data)
    }
    const closeModal = () => {
        setModalData('')
        setIsOpen(false)
    }

    const fetchObjetos = async () => {
        try {
            setIsFetching(true)
              const response = await fetch('/api/userHistory/')
            const data = await response.json()
            setHistoric(data)
        } catch (error) {
            toast.error('Erro ao buscar objetos:', error)
        } finally {
            setIsFetching(false)
        }
      }

    useEffect(() => {
      fetchObjetos()
    }, [])

    const handleDelete = (id) => {
        fetch(`/api/userHistory/${id}/delete/`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(response => response.json())
          .then(data => {
            toast.success('Arquivo excluído com sucesso')
            closeModal()
            fetchObjetos()
          })
          .catch(error => {
            toast.error('Erro ao excluir')
          })
    }

    const handleEdit = (id, newName) => {
        fetch(`/api/userHistory/${id}/edit/`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ nome: newName }),
        })
        .then(response => response.json())
      .then(data => {
        toast.success('Arquivo renomeado com sucesso')
        setEditingNameId(null)
        fetchObjetos()
      })
      .catch(error => {
        toast.error('Erro ao editar')
      })
  }

    return (
        <>
            <StyledHistoryContainer>
                <StyledHistoryContainer.Title>
                    Histórico
                </StyledHistoryContainer.Title>
                {isFetching ? <Loader/> : (
                    <StyledHistoryContainer.Table>
                        <thead>
                            <tr>
                                <th>
                                    Arquivo
                                </th>
                                <th>
                                    Data de envio
                                </th>
                                <th>
                                    Ações
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {!!historic && historic.length > 0 ? (
                                historic.map(item => (
                                    <tr key={item.id}>
                                        <td>
                                            {editingNameId === item.id ? (
                                                <StyledHistoryContainer.Table.Editing>
                                                    <StyledHistoryContainer.RenameInput defaultValue={item.nome} onChange={(e) => setNewName(e.target.value)}/>
                                                    <div>
                                                        <PrimaryButton disabled={newName === '' || !newName} size='SMALL' onClick={() => handleEdit(item.id, newName)}>
                                                            Confirmar
                                                        </PrimaryButton>
                                                        <SecondaryButton size='SMALL' onClick={() => setEditingNameId(null)}>
                                                            Cancelar
                                                        </SecondaryButton>
                                                    </div>
                                                </StyledHistoryContainer.Table.Editing>
                                            ) : (
                                                <StyledHistoryContainer.FileName>{item.nome}</StyledHistoryContainer.FileName>
                                            )} 
                                        </td>
                                        <td>
                                            {new Date(item.timestamp).toLocaleDateString()}
                                        </td>
                                        <td>
                                            <StyledHistoryContainer.Actions>
                                                <StyledHistoryContainer.RenameButton onClick={() => setEditingNameId(item.id)}>
                                                    <Pen/> <span>Renomear</span>
                                                </StyledHistoryContainer.RenameButton>
                                                <StyledHistoryContainer.RemoveButton onClick={() => openModal(item)}>
                                                    <TrashAlt/> <span>Excluir</span>
                                                </StyledHistoryContainer.RemoveButton>
                                            </StyledHistoryContainer.Actions>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td rowSpan={3}>
                                        Nenhum dado encontrado
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </StyledHistoryContainer.Table>
                )}
            </StyledHistoryContainer>
            <Modal primaryButtonLabel={'Confirmar'}
                   btnType={'submit'}
                   isOpen={modalIsOpen}
                   onClose={closeModal}
                   handleClick={() => handleDelete(modalData.id)}>
                Tem certeza que deseja remover o arquivo <strong>{modalData.nome}</strong> do seu histórico?
            </Modal>
        </>
    )
}

export default HistoryContainer