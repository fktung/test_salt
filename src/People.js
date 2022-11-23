import React, { useEffect, useState } from 'react';

function People() {

  const [people, setPeaople] = useState([])

  const getPeople = async() => {
    const respont = await fetch('https://dummyjson.com/users')
    const result = await respont.json()
    setPeaople(result.users)
  }

  useEffect(() => {
    getPeople()
  }, [])

  return (
    <div className="container">
      <div className="flex justify-between items-center mx-4">
        <h2 className="text-xl font-bold">Video</h2>
        <button className="hover:underline">Browse all video</button>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 pt-4 pb-8">
        {
          people.map((row, index) => {
            return (
              index <= 5 ?
                <div key={index} className={(index === 0 ? 'col-span-2 row-span-2 h-10' : '') + `m-2 relative group overflow-hidden`}>
                  <button href="/article/news1">
                    <img className="object-cover object-center h-full w-full mx-auto group-hover:scale-105 transition-all duration-300" src={row.image} alt={row.maidenName}/>
                    <div className="absolute bottom-0 top-0 right-0 left-0 text-left bg-gradient-to-t group-hover:from-black/90 transition-all duration-300">
                      <div className="h-fit px-4 pb-6 absolute bottom-0 right-0 left-0 flex justify-between items-center text-neutral-500">
                        <p className="text-lg mb-2">{row.maidenName}</p>
                        <div className="text-right">
                          <p className="text-lg mb-2">Username</p>
                          <p className="text-lg mb-2">{row.username}</p>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
              : ''
            )
          })
        }
      </div>
    </div>
  )
}

export default People