import React, { useState, useEffect } from 'react'

const LatestPic = () => {
  const [img, setImg] = useState(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    const getPic = async () => {
      try {
        const res = await fetch('http://localhost:3001/api/latest')
        const data = await res.text()
        setImg(data)
      } catch {
        setError(true)
      }
    }

    getPic()
  }, [])

  if (!img && !error) {
    return 'Loading latest picture...'
  }

  if (error) {
    return 'There was an error loading the latest picture'
  }

  return (
    <div className='latest-pic'>
      <img src={img} alt='latest' />
    </div>
  )
}

export default LatestPic
