import React from 'react'
import styled from 'styled-components'

import GlobalStyles from './GlobalStyles'
import Wrapper from './Wrapper'

import bg from '../../assets/bg_pattern'

const Container = styled.div`
  background-color: #ffffff;
  background-image: ${bg};
  min-height: 100vh;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
`

const HeaderLayout = styled.header`
  padding-top: 6rem;
  text-align: center;

  .logo {
    display: block;
    font-size: 4.8rem;
    font-weight: 900;
    text-transform: uppercase;
    text-shadow: 3px 3px 0px #ffc600;
    transform: rotate(-2deg);
  }
`

const Header = () => (
  <HeaderLayout>
    <Wrapper>
      <span className='logo'>
        Elena & Jannik{' '}
        <span role='img' aria-label='kissing couple'>
          👩‍❤️‍💋‍👨
        </span>
      </span>
    </Wrapper>
  </HeaderLayout>
)

const FooterLayout = styled.footer`
  font-size: 1.6rem;
  padding: 3rem 0;
  text-align: center;
`

const Footer = () => (
  <FooterLayout>
    Pack dein schönstes Lächeln aus und mach ein Bild{' '}
    <span role='img' aria-label='emoji'>
      😄
    </span>
  </FooterLayout>
)

const Layout = ({ children }) => (
  <Container className='layout-container'>
    <GlobalStyles />
    <Header />
    <main>{children}</main>
    <Footer />
  </Container>
)

export default Layout
