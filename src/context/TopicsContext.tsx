import { ReactNode, useCallback, useEffect, useState } from 'react'
import { createContext } from 'use-context-selector'

interface Topics {
  id?: number
  votes: number
  title: string
  description: string
  createdAt: Date
}

interface CreateTopicsInput {
  title: string
  description: string
  createdAt: Date
}

interface TopicsContextType {
  topics: Topics[]
  fetchTopics: () => void
  createTopics: (data: CreateTopicsInput) => void
}

interface TopicsProviderProps {
  children: ReactNode
}

export const TopicsContext = createContext({} as TopicsContextType)

export function TopicsProvider({ children }: TopicsProviderProps) {
  const [topics, setTopics] = useState<Topics[]>([])

  const fetchTopics = useCallback(() => {
    // get axios...

    setTopics([
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
    ])
  }, [])

  const createTopics = useCallback(
    async ({ title, description, createdAt }: CreateTopicsInput) => {
      // post axios...

      setTopics((state) => [
        {
          id: state.length + 1,
          votes: 0,
          title,
          description,
          createdAt,
        },
        ...state,
      ])
    },
    [],
  )

  useEffect(() => {
    fetchTopics()
  }, [fetchTopics])

  return (
    <TopicsContext.Provider
      value={{
        topics,
        fetchTopics,
        createTopics,
      }}
    >
      {children}
    </TopicsContext.Provider>
  )
}
