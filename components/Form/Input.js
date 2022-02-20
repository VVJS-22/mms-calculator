import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    }

    input[type=number] {
    -moz-appearance: textfield;
    }

    input {
        padding: 1rem 1.6rem;
        border-radius: 20px 0 0 20px;
        background: #1f2633;
        box-shadow: ${({ theme }) => `inset 5px 5px 10px ${theme.darkShadow}, inset -5px -5px 10px ${theme.lightShadow}`};
        color: ${({theme}) => theme.secondary};
        width: 180px;
        font-weight: 700;
        font-size: 1rem;
    }
`

const Input = (props) => {
    return (
        <Wrapper>
            <input {...props} />
        </Wrapper>
    )
}

export default React.memo(Input)