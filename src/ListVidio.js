import React from 'react'
import {vidios} from './data';

function ListVidio() {
  return (
    <div className="flex">
      <div className="max-h-[70vh] h-full overflow-y-auto">
        <h2 className="text-lg font-semibold">List Video</h2>
        {
          vidios.map((row, index) => {
            return (
              <div key={index} className={`m-2 relative group overflow-hidden`}>
                <button href="/article/news1">
                  <div className="flex">
                    <div className="w-36 mr-4">
                      <img className="object-cover object-center h-20 mx-auto group-hover:scale-105 transition-all duration-300" src={row.thumbnailUrl} alt="News Urban Athletes"/>
                    </div>
                    <div className="text-left">
                      <h2 className="font-semibold text-xl">{row.title.substring(0, 20)}</h2>
                      <p>{row.description.substring(0, 30)}...</p>
                      <p>Durasi : {row.duration}</p>
                    </div>
                  </div>
                </button>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default ListVidio