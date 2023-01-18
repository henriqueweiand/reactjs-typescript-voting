import { BrowserRouter } from 'react-router-dom'
import { Theme } from './components'
import { Router } from './Router'

export function App() {
  return (
    <Theme>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Theme>
  )
}
