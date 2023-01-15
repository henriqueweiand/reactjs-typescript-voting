import { Route, Routes } from 'react-router-dom'
import { TopicsProvider } from './context/TopicsContext'
import { DefaultLayout } from './layouts/DefaultLayout'

import { Home } from './pages/Home'

export function Router() {
  return (
    <TopicsProvider>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </TopicsProvider>
  )
}
