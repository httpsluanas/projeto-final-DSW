import styled from 'styled-components'
import Modal from '../../library/modals'
import Select from 'react-select'

export const StyledValidationModal = styled(Modal)`
`

StyledValidationModal.Container = styled.div(({theme}) =>`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: ${theme.spacing.md};
    margin-bottom: ${theme.spacing.lg};
`)

StyledValidationModal.List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    gap: ${({theme}) => theme.spacing.md};
`

StyledValidationModal.List.FakeSelect = styled.div(({theme}) =>`
    border-radius: 8px;
    border: 1px solid #B5B5B5;
    opacity: 0.9;
    background: #F3F3F3;

    ${theme.typography.body.base}

    color: #767676;
    padding: ${theme.spacing.sm};
    cursor: not-allowed;
`)

StyledValidationModal.List.Title = styled.h3(({theme}) =>`
    color: #3D3D3D;
    ${theme.typography.body.strong}
    margin: 0 ${theme.spacing.md} 0 0;
`)

StyledValidationModal.Select = styled(Select).attrs({classNamePrefix: 'fieldsSelect'})(({theme}) =>`
    .fieldsSelect{
        &__control{
            border: none;
            border-radius: 8px;
            background: #F3F3F3;
        }
        &__indicator{
            color: #3D3D3D;
            svg{
                width: ${theme.spacing.md};
                height: ${theme.spacing.md};
            }
            &-separator{
                display: none;
            }
        }
        &__value-container{
            ${theme.typography.body.base}
            color: #3D3D3D;
        }
        &__single-value{
            color: #3D3D3D;
            ${theme.typography.body.base}
        } 
        &__menu{
            box-shadow: 0 0 0 0;
            &-list{
                position: absolute;
                width: 100%;
                ${theme.typography.body.base}
                border-radius: 8px;
                color: #3D3D3D;
                border: 1px solid #F1F1F1;
                background: #FBFBFB;
            }
        }
        &__option{
            padding: ${theme.spacing.md};
        }
    }
`)