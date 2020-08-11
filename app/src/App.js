import React from 'react'
import styled from 'styled-components'

import Layout from './components/layout/Layout'

const Container = styled.div`
  height: 100%;
  display: grid;
  place-items: center;
`

const Button = styled.button`
  background: var(--primary);
  border: 0 none;
  font-family: 'Inter', sans-serif;
  font-size: 4rem;
  outline: 0;
  padding: 1rem;
`

const App = () => {
  return (
    <Layout couple='Jannik & Elena'>
      <Container>Pack dein schönstes Lächeln aus und mach n Bild!</Container>
    </Layout>
  )
}

export default App
