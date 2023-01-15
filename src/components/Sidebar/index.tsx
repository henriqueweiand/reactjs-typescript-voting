import React from 'react'

import { Wrapper } from './styles'
import { SidebarProps } from './types'

const Sidebar: React.FC<SidebarProps> = ({ ...rest }: SidebarProps) => {
  return <Wrapper {...rest}>teste</Wrapper>
}

export default Sidebar
