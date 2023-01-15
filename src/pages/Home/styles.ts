import styled from 'styled-components'

export const HomeContainer = styled.main`
  display: grid;
  grid-template-columns: 256px 1fr;
  gap: 2rem;
  align-items: flex-start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
