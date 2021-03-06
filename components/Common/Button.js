import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
    button {
        border-radius: 50px;
        background: #1f2633;
        box-shadow:  5px 5px 10px #1a202b,
                    -5px -5px 10px #242c3b;
        color: ${({theme}) => theme.tertiary};
        padding: 1rem;
        font-size: 1rem;
        cursor: pointer;
    }
`

const Button = ({label, style, type, ...props}) => {
    return (
        <Wrapper>
            <button {...props} style={style} type={type}>{label}</button>
        </Wrapper>
    )
}

export default React.memo(Button)