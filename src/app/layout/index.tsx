import { ReactNode } from 'react'

import Navbar from 'app/components/Navbar'
import Title from 'app/components/Title'
import SavingGoalTitle from 'app/components/SavingGoalTitle'

import { Content, Main } from './styles'

interface Props {
  children: ReactNode
}

const Layout = ({ children }: Props) => (
  <>
    <header>
      <Navbar />
    </header>
    <Main>
      <Title />
      <Content>
        <SavingGoalTitle title="Buy a house" />
        {children}
      </Content>
    </Main>
  </>
)

export default Layout
