import { ReactNode } from 'react'

import Navbar from 'app/components/Navbar'
import Title from 'app/components/Title'
import SavingGoalTitle from 'app/components/SavingGoalTitle'

import { Content } from './styles'

interface Props {
  children: ReactNode
}

const Layout = ({ children }: Props) => (
  <>
    <Navbar />
    <Title />
    <Content>
      <SavingGoalTitle title="Buy a house" />
      {children}
    </Content>
  </>
)

export default Layout
