import React from 'react';

function Navbar() {
  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
          <h2 href="https://flowbite.com" className="flex items-center">
            {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-6 mr-3 sm:h-9" alt="Flowbite Logo" /> */}
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">SocialNetwork</span>
          </h2>
          <div className="flex justify-between items-center w-full max-w-2xl">
            <div className="flex w-full max-w-md">
              <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1" >
                <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                <span className="sr-only">Search</span>
              </button>
              <div className="relative hidden md:block w-full max-w-md">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                  <span className="sr-only">Search icon</span>
                </div>
                <input type="text" id="search-navbar" className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..."/>
              </div>
              <button data-collapse-toggle="navbar-search" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
                <span className="sr-only">Open menu</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
              </button>
            </div>
            <div className="flex justify-center items-center space-x-4">
              {/* <span href="tel:5541251234" className="mr-6 text-sm font-medium text-gray-500 dark:text-white hover:underline">(555) 412-1234</span> */}
              <img src="/image/default-img.png" alt="foto" className="w-10 " />
              <span href="#" className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline">Login</span>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 dark:bg-gray-700">
          <div className="max-w-screen-xl px-4 py-3 mx-auto md:px-6 container">
            <div className="flex items-center">
              {/* ============= Menu ================== */}
              <ul className="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
                <li>
                  <span href="#" className="text-gray-900 dark:text-white hover:underline" aria-current="page">Videos</span>
                </li>
                <li>
                  <span href="#" className="text-gray-900 dark:text-white hover:underline" aria-current="page">People</span>
                </li>
                <li>
                  <span href="#" className="text-gray-900 dark:text-white hover:underline" aria-current="page">Documents</span>
                </li>
                <li>
                  <span href="#" className="text-gray-900 dark:text-white hover:underline" aria-current="page">Events</span>
                </li>
                <li>
                  <span href="#" className="text-gray-900 dark:text-white hover:underline" aria-current="page">Communities</span>
                </li>
                <li>
                  <span href="#" className="text-gray-900 dark:text-white hover:underline" aria-current="page">Favorites</span>
                </li>
                <li>
                  <span href="#" className="text-gray-900 dark:text-white hover:underline" aria-current="page">Channels</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar