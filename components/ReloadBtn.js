import React from 'react'
import Button from '../uiComponents/Button'

const ReloadBtn = ({label, onClick}) => {
  return (
    <Button label={label} onClick={onClick} />
  )
}

export default React.memo(ReloadBtn)