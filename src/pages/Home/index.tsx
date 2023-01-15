import { useState } from 'react'

import { HomeContainer, List } from './styles'

import { Sidebar, Topic } from '../../components'
import { TopicProps } from '../../components/Topic/types'

const topicsResponse = [
  {
    id: 1,
    title: 'React router dom',
    votes: 333,
    description: 'Relevant contens about react router dom.',
    createdAt: new Date(),
  },
  {
    id: 2,
    title: 'React query',
    votes: 321,
    description:
      'Show everyone how easy is to use react-query and strong at same time',
    createdAt: new Date(),
  },
]

interface TopicResponseMapper extends TopicProps {
  id: number
}

export function Home() {
  const [topics, setTopics] = useState<TopicResponseMapper[]>(topicsResponse)

  return (
    <HomeContainer>
      <Sidebar />
      <List>
        {topics.map((topic) => (
          <Topic {...topic} key={topic.id} />
        ))}
      </List>
    </HomeContainer>
  )
}
