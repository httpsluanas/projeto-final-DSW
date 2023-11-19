import styled from 'styled-components'
import Modal from '../../library/modals'
import Select from 'react-select'

export const StyledValidationModal = styled(Modal)`
`

StyledValidationModal.Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    margin-bottom: 24px;
`

StyledValidationModal.List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    gap: 16px;
`

StyledValidationModal.List.FakeSelect = styled.div`
    border-radius: 8px;
    border: 1px solid #B5B5B5;
    opacity: 0.9;
    background: #F3F3F3;
    font-family: Noto Sans;
    font-size: 14px;
    color: #767676;
    padding: 8px;
    cursor: not-allowed;
`

StyledValidationModal.List.Title = styled.h3`
    color: #3D3D3D;
    font-family: Noto Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    margin: 0 16px 0 0;
`

StyledValidationModal.Select = styled(Select).attrs({classNamePrefix: 'fieldsSelect'})`
    .fieldsSelect{
        &__control{
            border: none;
            border-radius: 8px;
            background: #F3F3F3;
        }
        &__indicator{
            color: #3D3D3D;
            svg{
                width: 16px;
                height: 16px;
            }
            &-separator{
                display: none;
            }
        }
        &__value-container{
            font-family: Noto Sans;
            font-size: 14px;
            font-style: normal;
            color: #3D3D3D;
        }
        &__single-value{
            font-family: Noto Sans;
            font-size: 14px;
            font-style: normal; 
            color: #3D3D3D;
        } 
        &__menu{
            box-shadow: 0 0 0 0;
            &-list{
                position: absolute;
                width: 100%;
                font-family: Noto Sans;
                font-size: 14px;
                font-style: normal;
                border-radius: 8px;
                color: #3D3D3D;
                border: 1px solid #F1F1F1;
                background: #FBFBFB;
            }
        }
        &__option{
            padding: 16px;
        }
    }
`