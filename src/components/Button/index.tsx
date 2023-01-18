import React from 'react'
import { ButtonProps } from './types'
import { Container } from './styles'

const Button: React.FC<ButtonProps> = ({
  children,
  type = 'button',
  ...rest
}: ButtonProps) => {
  return <Container {...rest}>{children}</Container>
}

export default Button
