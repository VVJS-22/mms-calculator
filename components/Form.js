import React from 'react'
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

const Form = () => {
    return (
        <Wrapper onSubmit="">
            <Input 
            type="number" 
            name="number" 
            id="number" 
            placeholder='Enter a number' />
            <SubmitBtn />
        </Wrapper>
    )
}

export default Form