import React from 'react'
import { ThemeProps } from './types'
import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

const Theme: React.FC<ThemeProps> = ({ children }: ThemeProps) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  )
}

export default Theme
