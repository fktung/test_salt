import React from 'react'
import Navbar from './components/Navbar'
import People from './People'
import Videos from './Videos'

function Home() {
  return (
    <div>
      <Navbar />
      <div className="container my-4">
        <Videos />
        <People />
      </div>
    </div>
  )
}

export default Home