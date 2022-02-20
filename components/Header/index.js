import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
    height: 15vh;
    min-height: 65px;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Header = () => {

  return (
    <Wrapper>
        <h1>MMS Calculator</h1>
    </Wrapper>
  )
}

export default React.memo(Header)