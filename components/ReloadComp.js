import React from 'react'
import ReloadBtn from './ReloadBtn'
import styled from 'styled-components'

const Wrapper = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    height: calc(20vh - 10px);
    padding: 1rem;
    min-height: 80px;
`

const ReloadComp = () => {
    return (
        <Wrapper>
            <ReloadBtn label="Reload 1234.json" />
            <ReloadBtn label="Reload 4321.json" />
        </Wrapper>
    )
}

export default ReloadComp