import React from 'react'

const Navbar = () => {
  return (
    <nav>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-transparent">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href='/' className="text-orange-500 text-[2rem] font-bold">ParkVue</a>
          </div>
          <div className="flex">
            <a href="/" className="hover:animate-pulse px-3 py-2 rounded-md text-sm font-medium">Home</a>
            <a href="/listings" className="hover:animate-pulse px-3 py-2 rounded-md text-sm font-medium">List Your Space</a>
            <a href="/parkingpage" className="hover:animate-pulse px-3 py-2 rounded-md text-sm font-medium">Book a Slot</a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
