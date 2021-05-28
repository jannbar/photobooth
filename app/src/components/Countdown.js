import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const Letter = styled.span`
  font-size: 22rem;
  font-weight: 700;
`

const Cheese = styled.span`
  font-size: 16rem;
  font-weight: 700;
`

const Countdown = () => {
  const [countdown, setCountdown] = useState(10)
  const [finished, setFinished] = useState(false)

  useEffect(() => {
    const shoot = async () => {
      try {
        setFinished(true)
        await fetch('http://192.168.0.100:1234/shoot')

        setTimeout(() => {
          window.location.reload()
        }, 2000)
      } catch (err) {
        alert(err)
      }
    }

    const timer = setInterval(() => {
      if (countdown === 1) {
        shoot()
        clearInterval(timer)
      } else {
        setCountdown((countdown) => countdown - 1)
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [countdown])

  return <div>{finished ? <Cheese>Cheeese!</Cheese> : <Letter>{countdown}</Letter>}</div>
}

export default Countdown
