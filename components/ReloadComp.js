import React, { useCallback } from 'react'
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

const ReloadComp = ({ url, setUrl }) => {

    const setData1234 = useCallback(() => {
        setUrl('/api/data1234')
    }, [url])

    const setData4321 = useCallback(() => {
        setUrl('/api/data4321')
    }, [url])


    return (
        <Wrapper>
            <ReloadBtn
            onClick={setData1234}
            label="Load 1234.json" />
            <ReloadBtn 
            onClick={setData4321}
            label="Load 4321.json" />
        </Wrapper>
    )
}

export default React.memo(ReloadComp)