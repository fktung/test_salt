import React from 'react'
import Navbar from './components/Navbar'
import Videos from './Videos'

function Home() {
  return (
    <div>
      <Navbar />
      <div className="container my-4">
        <Videos />
      </div>
    </div>
  )
}

export default Home