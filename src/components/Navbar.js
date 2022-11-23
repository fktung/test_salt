import React from 'react';

function Navbar() {

  const hamburger = () => {
    let hamburger = document.querySelector('#hamburger');
    let menu = document.querySelector('#menu');
    menu.classList.toggle('menu-open');
    menu.classList.toggle('menu-close');
    hamburger.classList.toggle('hamburger-active');
  };

  
  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
          <h2 href="https://flowbite.com" className="flex items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">SocialNetwork</span>
          </h2>
          <div className="sm:flex justify-between items-center w-full max-w-2xl">
            <div className="flex w-full max-w-md">
              <div className="relative block w-full max-w-md">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                  <span className="sr-only">Search icon</span>
                </div>
                <input type="text" id="search-navbar" className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..."/>
              </div>
            </div>
            <div className="mt-2 sm:mt-0 flex justify-end sm:justify-center items-center space-x-4">
              <img src="https://dummyimage.com/400x400/fff/000.png&text=Foto" alt="foto" className="w-10 " />
              <span href="#" className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline">Login</span>
            </div>
          </div>
        </div>
      </nav>

      {/* ================================================ */}

      <div className="tracking-wider overflow-visible bg-gray-50 dark:bg-gray-700">
        <div className="font-BebasNeue text-blue-primary overflow-visible
          lg:container lg:px-2 lg:w-full lg:flex lg:justify-between lg:items-center
          relative
        ">
          <div className="flex justify-center items-center py-2 relative h-14 lg:h-12">
            <div className="absolute right-0 top-0 bottom-0 mr-3 flex items-center lg:hidden">
              <button id="hamburger" onClick={hamburger} name="hamburger" type="button">
                <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
                <span className="hamburger-line transition duration-300 ease-in-out"></span>
                <span className="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
              </button>
            </div>
          </div>
          <div className="w-full absolute menu-close overflow-hidden transition-all ease-in duration-300
            lg:static lg:h-full lg:overflow-visible z-50 text-white
            bg-gradient-to-b from-gray-700 lg:from-transparent 
          " id='menu'>
            <div className="lg:flex lg:justify-between">
              <div className="flex justify-center lg:justify-start items-center text-center lg:w-full lg:font-semibold text-xl tracking-wider">
                <ul className="lg:flex lg:space-x-2 xl:space-x-4">
                  <li className="py-1.5 lg:px-3">Videos</li>
                  <li className="py-1.5 lg:px-3">People</li>
                  <li className="py-1.5 lg:px-3">Documents</li>
                  <li className="py-1.5 lg:px-3">Events</li>
                  <li className="py-1.5 lg:px-3">Communities</li>
                  <li className="py-1.5 lg:px-3">Favorites</li>
                  <li className="py-1.5 lg:px-3">Channels</li>
                </ul>
              </div>
              <div className="font-black sm:flex sm:justify-around lg:space-x-4 lg:min-w-max text-xl">
                <div className="py-1 flex justify-center items-center">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar