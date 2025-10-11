import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='flex justify-between bg-slate-800 text-white py-3 shadow-lg'>
      <div className="logo">
        <Link to="/" className='font-bold text-2xl mx-8 text-white hover:text-yellow-300 transition-colors'>iTask</Link>
      </div>
      <ul className='flex gap-6 mx-8 items-center'>
        <li><Link to="/" className='hover:text-yellow-300 transition-colors font-medium'>Home</Link></li>
        <li><Link to="/travel" className='hover:text-yellow-300 transition-colors font-medium'>Location-Based-Todo</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
