import React from 'react'

import { StyledModal } from './styles'

import { PrimaryButton, SecondaryButton } from '../buttons'

const Modal = ({
    children,
    isOpen,
    onClose,
    className,
    preventScroll,
    shouldCloseOnEsc,
    shouldCloseOnOverlayClick,
    title,
    subtitle,
    primaryButtonLabel,
    primaryButtonDisabled,
    btnType,
    ...otherProps
}) => {
    return (
        <StyledModal ariaHideApp={true}
                     className={className}
                     closeTimeoutMS={150}
                     isOpen={isOpen}
                     onRequestClose={onClose}
                     style={{
                        overlay: {
                            position: 'fixed',
                            inset: 0,
                            zIndex: 1000,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: 'rgba(0, 0, 0, 0.6)',
                        }
                    }}
                     preventScroll={preventScroll}
                     shouldCloseOnEsc={shouldCloseOnEsc}
                     shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
                     {...otherProps}
        >
            <StyledModal.Header>
                <StyledModal.Title>
                    {title}
                </StyledModal.Title>
                <StyledModal.Subtitle>
                    {subtitle}
                </StyledModal.Subtitle>
                <StyledModal.CloseButton onClick={onClose}/>
            </StyledModal.Header>
            <StyledModal.Body>
                {children}
            </StyledModal.Body>
            <StyledModal.Footer>
                <SecondaryButton onClick={onClose}>
                    Cancelar
                </SecondaryButton>
                <PrimaryButton type='submit' form={'validation-form-id'} disabled={primaryButtonDisabled}>
                    {primaryButtonLabel}
                </PrimaryButton>
            </StyledModal.Footer>
        </StyledModal>
    )
}

export default Modal