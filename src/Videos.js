import React from 'react'
import {videos} from './data';
console.log(videos);

function Videos() {
  return (
    <div>
      <div className="container grid grid-cols-2 lg:grid-cols-3 py-12">
        {
          videos.map((row, index) => {
            return (
              <>
                {
                  index <= 5 ?
                  <>
                    <div className={(index === 0 ? 'col-span-2 row-span-2 ' : '') + `m-2 relative group overflow-hidden`}>
                      <button href="/article/news1">
                        <img className="object-cover object-center h-full w-full mx-auto group-hover:scale-105 transition-all duration-300" src={row.thumbnailUrl} alt="News Urban Athletes"/>
                        <div className="absolute top-0 right-0 bg-black bg-opacity-50 py-1 px-4 m-4">
                          <p className="text-yellow-primary">{index}</p>
                        </div>
                        <div className="absolute bottom-0 top-0 right-0 left-0 text-left bg-gradient-to-t from-black bg-opacity-90 opacity-0 group-hover:opacity-100 transition-all duration-300">
                          <div className="h-fit px-4 pb-6 absolute bottom-0 right-0 left-0">
                            <p className="text-lg text-white mb-2">Kapan waktu terbaik untuk berolahraga / pergi ke gym?</p>
                          </div>
                        </div>
                      </button>
                    </div>
                  </>
                  : ''
                }
              </>
            )
          })
        }
        {/* <div className="m-2 col-span-2 row-span-2 relative group overflow-hidden">
          <button href="/article/news5">
            <img className="object-cover object-center h-full w-full mx-auto group-hover:scale-105 transition-all duration-300" src={videos[0].thumbnailUrl} alt="News Urban Athletes"/>
            <div className="absolute top-0 right-0 bg-black bg-opacity-50 py-1 px-4 m-4">
              <p className="text-yellow-primary">Article Update</p>
            </div>
            <div className="absolute bottom-0 top-0 right-0 left-0 text-left bg-gradient-to-t from-black bg-opacity-90 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div className="h-fit px-4 pb-6 absolute bottom-0 right-0 left-0">
                <p className="text-lg text-white mb-2">Program diet untuk turunkan berat badan</p>
              </div>
            </div>
          </button>
        </div>
        <div className="m-2 relative group overflow-hidden">
          <button href="/article/news1">
            <img className="object-cover object-center h-full w-full mx-auto group-hover:scale-105 transition-all duration-300" src={videos[1].thumbnailUrl} alt="News Urban Athletes"/>
            <div className="absolute top-0 right-0 bg-black bg-opacity-50 py-1 px-4 m-4">
              <p className="text-yellow-primary">Article Update</p>
            </div>
            <div className="absolute bottom-0 top-0 right-0 left-0 text-left bg-gradient-to-t from-black bg-opacity-90 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div className="h-fit px-4 pb-6 absolute bottom-0 right-0 left-0">
                <p className="text-lg text-white mb-2">Kapan waktu terbaik untuk berolahraga / pergi ke gym?</p>
              </div>
            </div>
          </button>
        </div> */}
      </div>
    </div>
  )
}

export default Videos