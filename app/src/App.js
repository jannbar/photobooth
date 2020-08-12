import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'

import Layout from './components/layout/Layout'
import Countdown from './components/Countdown'

const Container = styled.div`
  height: 100%;
  display: grid;
  place-items: center;
`

const pointRight = keyframes`
  0%, 100% {
    transform: translateX(0)
  } 50% {
    transform: translateX(10px)
  }
`

const pointLeft = keyframes`
  0%, 100% {
    transform: translateX(0)
  } 50% {
    transform: translateX(-10px)
  }
`

const Button = styled.button`
  background: #4e4edf;
  border: 0 none;
  color: #fff;
  cursor: pointer;
  font-family: 'IBM Plex Mono';
  font-size: 8rem;
  font-weight: 700;
  outline: 0;
  padding: 1.4rem 2rem;
  box-shadow: 12px 12px 0px #ffc600;
  transform: rotate(-2deg);
  transition: all 0.1s ease;

  :hover {
    box-shadow: 12px 18px 0px #ffc600;
  }

  .left-hand {
    display: inline-block;
    animation: ${pointRight} 1s ease infinite;
  }

  .right-hand {
    display: inline-block;
    animation: ${pointLeft} 1s ease infinite;
  }
`

const App = () => {
  const [showCountdown, setShowCountdown] = useState(false)

  const handleClick = () => {
    setShowCountdown(true)
  }

  return (
    <Layout couple='Jannik & Elena'>
      <Container>
        {showCountdown ? (
          <Countdown />
        ) : (
          <Button onClick={handleClick}>
            <span className='left-hand' role='img' aria-label='finger pointing to the right'>
              👉🏼
            </span>{' '}
            Drück mich!{' '}
            <span className='right-hand' role='img' aria-label='finger pointing to the left'>
              👈🏼
            </span>
          </Button>
        )}
      </Container>
    </Layout>
  )
}

export default App
