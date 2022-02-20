import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
    width: 140px;
    height: 140px;
    background: ${({ theme }) => theme.dark.primary};
    color: ${({ theme }) => theme.dark.secondary};
    border-radius: 50%;
    background: #1f2633;
    box-shadow: inset 5px 5px 10px #0c0f14, inset -5px -5px 10px #323d52;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    span {
        font-weight: 700;
        color: ${({ theme }) => theme.dark.tertiary};
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