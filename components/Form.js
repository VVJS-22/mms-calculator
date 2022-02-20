import React, { useCallback, useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'
import Input from '../uiComponents/Input'
import SubmitBtn from './SubmitBtn'

const Wrapper = styled.form`
    height: 15vh;
    min-height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Form = ({ setData }) => {

    const [value, setValue] = useState()

    

    const handleSubmit = useCallback((e) => {
        e.preventDefault()
        value && setData((data) => ([...data, +value]))
    })

    const handleChange = useCallback((e) => {
        setValue(e.target.value)
    }, [value])
    
    return (
        <Wrapper onSubmit={handleSubmit}>
            <Input 
            type="number" 
            name="number" 
            id="number" 
            onChange={handleChange}
            placeholder='Enter a number' />
            <SubmitBtn />
        </Wrapper>
    )
}

export default React.memo(Form)