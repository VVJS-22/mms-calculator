import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
    width: 140px;
    height: 140px;
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.secondary};
    border-radius: 50%;
    box-shadow: ${({ theme }) => `inset 5px 5px 10px ${theme.darkShadow}, inset -5px -5px 10px ${theme.lightShadow}`};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    span {
        font-weight: 700;
        color: ${({ theme }) => theme.tertiary};
    }
    @media screen and (min-width: 960px) {
      height: 220px;
      width: 220px;
    }
`

const ResultBox = ({ label, value }) => {
  return (
    <Wrapper>
        <span>{label}</span>
        {value.toFixed(6)}
    </Wrapper>
  )
}

export default React.memo(ResultBox)