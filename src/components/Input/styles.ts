import styled from 'styled-components'

export const Input = styled.input`
  border-radius: 6px;
  border: 0;
  background: ${(props) => props.theme['gray-900']};
  color: ${(props) => props.theme['gray-300']};
  padding: 1rem;

  &::placeholder {
    color: ${(props) => props.theme['gray-500']};
  }
`
