import { HomeContainer, List } from './styles'

import { useContextSelector } from 'use-context-selector'
import { Sidebar, Topic } from '../../components'
import { TopicsContext } from '../../context/TopicsContext'

export function Home() {
  const topics = useContextSelector(TopicsContext, (context) => {
    return context.topics
  })

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
