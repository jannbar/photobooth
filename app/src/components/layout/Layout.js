import React from 'react'
import styled from 'styled-components'

import GlobalStyles from './GlobalStyles'
import Wrapper from './Wrapper'

const Container = styled.div`
  min-height: 100vh;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
`

const HeaderLayout = styled.header`
  padding: 2rem;

  .logo {
    font-size: 2rem;
  }
`

const Header = ({ name }) => (
  <HeaderLayout>
    <Wrapper>
      <span className='logo'>{name}s Fotobox</span>
    </Wrapper>
  </HeaderLayout>
)

const Layout = ({ children }) => (
  <Container className='layout-container'>
    <GlobalStyles />
    <Header name='JP & Janina' />
    <main>{children}</main>
  </Container>
)

export default Layout
