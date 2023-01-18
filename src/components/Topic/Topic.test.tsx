import { describe, it } from 'vitest'
import { render, screen } from '../../test/test-utils'

import Topic from './'
import Theme from '../Theme'
import { TopicProps } from './types'

const mockTopic: TopicProps = {
  title: 'React query example',
  description: 'This is only an example of react query',
  createdAt: new Date(),
  votes: 999,
}

describe('Topic', () => {
  it('should render the component', () => {
    const { getByTestId } = render(
      <Theme>
        <Topic {...mockTopic} data-testid="topic-test" />
      </Theme>,
    )

    expect(getByTestId('topic-test').tagName).toEqual('DIV')
  })

  it('should have the props inside the component', () => {
    render(
      <Theme>
        <Topic {...mockTopic} data-testid="topic-test" />
      </Theme>,
    )

    expect(
      screen.getByText(new RegExp(mockTopic.title, 'i')),
    ).toBeInTheDocument()
    expect(
      screen.getByText(new RegExp(mockTopic.description, 'i')),
    ).toBeInTheDocument()
    expect(screen.getByText(mockTopic.votes)).toBeInTheDocument()
  })
})
