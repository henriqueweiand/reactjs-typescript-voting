import styled from 'styled-components'

export const Wrapper = styled.div`
  border-radius: 3px;
  background-color: ${(props) => props.theme.white};
  width: 100%;
  padding: 0.8rem 1rem;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 1rem;
  justify-content: space-between;
  align-items: stretch;
  align-content: stretch;

  &:hover {
    box-shadow: 1px 1px 5px 0 ${(props) => props.theme['green-300']};
    transition: box-shadow 0.3s ease-in-out;
  }
`

export const Vote = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0.1rem 1rem;
  border-radius: 3px;
  border: 1px solid ${(props) => props.theme['gray-600']};

  p:first-child {
    font-weight: normal;
    font-size: 0.6rem;
    color: ${(props) => props.theme['gray-900']};
  }

  p {
    font-weight: bold;
    color: ${(props) => props.theme['gray-900']};
  }
`

export const Details = styled.section`
  display: flex;
  flex: 1;
  flex-direction: column;

  h1 {
    font-size: 0.9rem;
    color: ${(props) => props.theme['gray-600']};
  }

  p {
    font-size: 0.8rem;
    color: ${(props) => props.theme['gray-600']};
  }
`

export const Date = styled.section`
  display: flex;
  font-size: 0.8rem;
  color: ${(props) => props.theme['gray-600']};
`
