import React from 'react'
import Button from '../uiComponents/Button'

const SubmitBtn = () => {
    return (
        <Button 
        label="Add" 
        style={{
            borderRadius: '0 20px 20px 0',
            width: '85px'
        }}
        type='submit'
        />
    )
}

export default SubmitBtn