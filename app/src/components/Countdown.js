import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const Letter = styled.span`
  font-size: 22rem;
  font-weight: 700;
`

const Countdown = () => {
  const [countdown, setCountdown] = useState(5)

  // Add random face emoji

  useEffect(() => {
    const timer = setInterval(() => {
      console.log(countdown)
      if (countdown > 1) {
        setCountdown((countdown) => countdown - 1)
      } else {
        setCountdown('Cheeese!')
        return
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [countdown])

  return <Letter>{countdown}</Letter>
}

export default Countdown
