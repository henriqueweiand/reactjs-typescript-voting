import { describe, it } from 'vitest'
import { render, userEvent } from '../../test/test-utils'

import Input from './'
import Theme from '../Theme'

describe('Input', () => {
  it('should render the component', () => {
    const { getByTestId } = render(
      <Theme>
        <Input data-testid="input-test" name="input-name" />
      </Theme>,
    )

    expect(getByTestId('input-test').tagName).toEqual('INPUT')
    expect(getByTestId('input-test')).toHaveAttribute('name', 'input-name')
  })

  it('should change input value', async () => {
    const { getByTestId } = render(
      <Theme>
        <Input data-testid="input-test" name="input-name" />
      </Theme>,
    )

    const input = getByTestId('input-test')
    expect(input).toBeInTheDocument()
    await userEvent.type(input, '1337')
    expect(input).toHaveValue('1337')
  })
})
