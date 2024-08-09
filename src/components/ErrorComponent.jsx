import React from 'react'
import {Alert, AlertIcon} from '@chakra-ui/react'
const ErrorComponent = ({message}) => {
  return (
    <Alert 
    status='error' 
    position={'fixed'} 
    bottom={'10'} 
    left={['20%', '50%']} 
    transform={['translate(-10%)', 'translate(-50%)']} 
    w={['200','container.lg']}
    >
      <AlertIcon/>
      {message}
    </Alert>
  )
}

export default ErrorComponent
