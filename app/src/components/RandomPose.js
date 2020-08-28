import React from 'react'

const RandomPose = () => {
  const poses = ['😄', '😂', '😜', '😮', '🤨', '🙂', '🙈🙉🙊', '😘', '✌🏼']
  const random = Math.floor(Math.random() * poses.length)

  return (
    <h1>
      Mach ne Grimasse{' '}
      <span role='img' aria-label='pose emoji'>
        {poses[random]}
      </span>
    </h1>
  )
}

export default RandomPose
