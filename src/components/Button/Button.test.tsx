import { describe, it } from 'vitest'
import { render } from '../../test/test-utils'

import Button from './'
import Theme from '../Theme'

describe('Button', () => {
  it('should render the component', () => {
    const { getByTestId } = render(
      <Theme>
        <Button data-testid="button-test">test</Button>
      </Theme>,
    )

    expect(getByTestId('button-test').tagName).toEqual('BUTTON')
  })
})
