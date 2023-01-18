import { describe, it, vi } from 'vitest'
import { render, screen, fireEvent, userEvent } from '../../test/test-utils'

import Sidebar from './'
import Theme from '../Theme'

const handleCreateTopic = vi.fn()

describe('Sidebar', () => {
  it('should render the component', () => {
    const { getByTestId } = render(
      <Theme>
        <Sidebar data-testid="sidebar-test" />
      </Theme>,
    )

    expect(getByTestId('sidebar-test').tagName).toEqual('DIV')
  })
})
