import React, { useEffect, useState } from 'react'

const HistoryContainer = ({
}) => {

    const [historic, setHistoric] = useState()
    const [isFetching, setIsFetching] = useState(true)

    const fetchObjetos = async () => {
        try {
            setIsFetching(true);
              const response = await fetch('/api/userHistory/')
            const data = await response.json();
            setHistoric(data);
        } catch (error) {
            console.error('Erro ao buscar objetos:', error)
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
            console.log(data)
            fetchObjetos()
          })
          .catch(error => {
            console.error('Erro ao excluir:', error)
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
        console.log(data)
        fetchObjetos()
      })
      .catch(error => {
        console.error('Erro ao editar:', error)
      })
  }

    return (
        <div>
            <h2>Histórico</h2>
            {isFetching ? 'loader' : (
                <table>
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
                                        {item.nome}
                                    </td>
                                    <td>
                                        {new Date(item.timestamp).toLocaleDateString()}
                                    </td>
                                    <td>
                                        <button onClick={() => handleEdit(item.id, prompt('Nome editado'))}>
                                            Renomear
                                        </button>
                                        <button onClick={() => handleDelete(item.id)}>
                                            Excluir
                                        </button>
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
                </table>
            )}
            {/* {data.objetos.map((objeto, index) => (
                <li key={index}>
                    Objeto {index + 1}:
                    <ul>
                    {Object.entries(objeto).map(([chave, valor], i) => (
                        <li key={i}>
                        {chave}: {valor}
                        </li>
                    ))}
                    </ul>
                </li>
            ))} */}
        </div>
    )
}

export default HistoryContainer