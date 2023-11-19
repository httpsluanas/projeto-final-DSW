import React, { useState } from 'react'

import { PrimaryButton, SecondaryButton } from '../buttons'
import { StyledSlider } from './styles'

const Slider = ({
    children,
    currentSlide,
    setCurrentSlide,
    totalSlides
}) => {
    
    const [selectedLList, setSelected] = useState([...[currentSlide]])

    const nextSlide = () => {
        setCurrentSlide(currentSlide + 1)
        setSelected([...selectedLList, currentSlide + 1])
    }

    const previousSlide = () => {
        setSelected([...selectedLList.slice(0,currentSlide), ...selectedLList.slice(currentSlide + 1)])
        setCurrentSlide(currentSlide - 1)
    }

    return (
        <StyledSlider>
            <StyledSlider.Dots>
            { [...Array(totalSlides).keys()].map( i => (
                <StyledSlider.Dot isSelected={selectedLList.includes(i)} key={i}/>
            ))}
            </StyledSlider.Dots>
            {React.Children.toArray(children).map((child, i) => (
                <StyledSlider.Slide showSlide={i === currentSlide}>
                    {child}
                </StyledSlider.Slide>
            ))}
            <StyledSlider.Actions>
                <SecondaryButton disabled={currentSlide === 0} size='SMALL' onClick={previousSlide}>
                    Anterior
                </SecondaryButton>
                <PrimaryButton disabled={(currentSlide + 1) >= totalSlides} size='SMALL' onClick={nextSlide}>
                    Próximo
                </PrimaryButton>
            </StyledSlider.Actions>
        </StyledSlider>
    )
}

export default Slider