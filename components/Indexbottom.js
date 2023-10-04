import React from 'react'

const Indexbottom = () => {
  return (
    <div>
         {/* :BOTTOM OPTIONS */}
    <div className="absolute left-1/2 bottom-0 w-full md:w-2/3 flex justify-around items-end transform -translate-x-1/2">
      {/* ::Our Story */}
      <a
        href="#link"
        className="group relative py-5 w-40 rounded-t-xl bg-white bg-opacity-50 text-center text-blue-800 font-semibold font-firacode transition-all duration-300 transform hover:pb-14"
      >
        Our Services
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-1/2 h-8 w-8 opacity-0 transition-all duration-300 ease-in transform -translate-x-1/2 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      </a>
      {/* ::Our Shop */}
      <a
        href="#link"
        className="group relative py-5 w-40 rounded-t-xl bg-white bg-opacity-50 text-center text-blue-800 font-semibold font-firacode transition-all duration-300 transform hover:pb-14"
      >
        Payment
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-1/2 h-8 w-8 opacity-0 transition-all duration-300 ease-in transform -translate-x-1/2 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      </a>
      {/* ::Our Contact */}
      <a
        href="#link"
        className="group relative py-5 w-40 rounded-t-xl bg-white bg-opacity-50 text-center text-blue-800 font-semibold font-firacode transition-all duration-300 transform hover:pb-14"
      >
        Contact Us
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-1/2 h-8 w-8 opacity-0 transition-all duration-300 ease-in transform -translate-x-1/2 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6-V5z" />
        </svg>
      </a>
    </div>
    </div>
  )
}

export default Indexbottom