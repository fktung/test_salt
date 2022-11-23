import React from 'react'
import Navbar from './components/Navbar'
import ListVidio from './ListVidio'
import People from './People'
import Videos from './Videos'

function Home() {
  return (
    <div>
      <Navbar />
      <div className="container my-4 lg:flex">
        <div>
          <Videos />
          <People />
        </div>
        <div className="lg:max-w-sm lg:w-full">
          <div className="min-h-screen p-4">
            <ListVidio />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home