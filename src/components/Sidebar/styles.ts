import styled from 'styled-components'

export const Wrapper = styled.div`
  border-radius: 3px;
  background-color: ${(props) => props.theme['gray-800']};
  width: 100%;
  padding: 1rem;

  h1 {
    font-size: 1.5rem;
  }

  form {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`
