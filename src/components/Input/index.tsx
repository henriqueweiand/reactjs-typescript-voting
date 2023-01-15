import React from 'react'
import { InputProps } from './types'
import { Input as InputStyle } from './styles'

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ ...rest }, reference) => {
    return <InputStyle {...rest} ref={reference} />
  },
)

Input.displayName = 'Input'

export default Input
