import styled from 'styled-components'

export const StyledField = styled.div`
    width: 100%;
    display: grid;
    grid-template-areas: "label label"
                         "input input"
                         "message helper";
`

StyledField.Label = styled.label`
    grid-area: label;
        
    display: block;
    margin-bottom: 8px;
    font-weight: 600;
    color: #3D3D3D;

    ${({theme}) => theme.typography.label};
`

StyledField.InputContainer = styled.div`
    grid-area: input;
`

StyledField.Error = styled.p`
    grid-area: message;

    ${({theme}) => theme.typography.body.base};

    display: inline-block;
    color: #DA0000;
    margin-top: 8px;
    margin-bottom: 0;
    i {
        width: 16px;
        height: 16px;
        vertical-align: text-top;
    }
`