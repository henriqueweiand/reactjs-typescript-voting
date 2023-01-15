import { Sidebar } from '../../components/Sidebar/Sidebar'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Sidebar />
      <div>content</div>
    </HomeContainer>
  )
}
