import React, { useEffect, useState } from 'react'

import Modal from '../../library/modals'
import Slider from '../../library/slider'

const ValidationModal = ({
    modalIsOpen,
    closeModal
}) => {

    const [defaultList, setDefaultList] = useState()
    const [isFetching, setIsFetching] = useState(true)

    const [currentSlide, setCurrentSlide] = useState(0)

    const fetchObjetos = async () => {
        try {
            setIsFetching(true);
              const response = await fetch('/api/campos_tabelas/')
            const data = await response.json();
            setDefaultList(data);
        } catch (error) {
            console.error('Erro ao buscar objetos:', error)
        } finally {
            setIsFetching(false)
        }
      }

    useEffect(() => {
      fetchObjetos()
    }, [])

    return (
        <Modal isOpen={true}
               onClose={closeModal}
               title={'Valide seus dados'}
               subtitle={'Lorem ipsum dolor sit amet consectetur. Nisi nec quis sagittis placerat amet amet ridiculus lorem.'}
               primaryButtonLabel={'Enviar'}
               primaryButtonDisabled>
            {isFetching ? 'loader' : (
                <Slider totalSlides={defaultList.length} {...{currentSlide, setCurrentSlide}}>
                    {defaultList.map(dl => (
                        <div>
                            {dl.name}
                            <ul>
                                {dl.fields.map(field =>
                                    <li>
                                        {field}
                                    </li>
                                )}
                            </ul>
                        </div>
                    ))}
                </Slider>
            )}
        </Modal>
    )
}

export default ValidationModal