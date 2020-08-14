import React, { useState, useEffect } from 'react'
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

const Header = () => {
  const [couple, setCouple] = useState(null)

  useEffect(() => {
    fetch('http://localhost:3001/api/couple')
      .then((res) => res.json())
      .then((res) => setCouple(res.couple))
  }, [])

  return (
    <HeaderLayout>
      <Wrapper>
        <span className='logo'>
          {couple}{' '}
          <span role='img' aria-label='kissing couple'>
            👩‍❤️‍💋‍👨
          </span>
        </span>
      </Wrapper>
    </HeaderLayout>
  )
}

const FooterLayout = styled.footer`
  font-size: 1.6rem;
  padding: 3rem 0;
  text-align: center;
`

const Footer = () => (
  <FooterLayout>
    <span role='img' aria-label='emoji'>
      👾
    </span>{' '}
    built with love
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
