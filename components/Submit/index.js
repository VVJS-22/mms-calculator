import React from 'react'
import Button from '../Common/Button'

const Submit = () => {
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

export default React.memo(Submit)