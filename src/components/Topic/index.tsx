import React from 'react'
import { format } from 'date-fns'

import { Wrapper, Vote, Details, Date } from './styles'
import { TopicProps } from './types'

const Topic: React.FC<TopicProps> = ({
  title,
  votes,
  description,
  createdAt,
  ...rest
}: TopicProps) => {
  const publishedDateFormatted = format(createdAt, 'yyyy.MM.dd')

  return (
    <Wrapper {...rest}>
      <Vote>
        <p>votes</p>
        <p>{votes}</p>
      </Vote>
      <Details>
        <h1>{title}</h1>
        <p>{description}</p>
      </Details>
      <Date>{publishedDateFormatted}</Date>
    </Wrapper>
  )
}

export default Topic
