import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    const [hide, setHide] = useState(false);
  return (
    <nav onMouseOver={()=>setHide(true)} onMouseLeave={()=>{setHide(false)}} className=' bg-red-500 px-6 py-4 flex flex-row justify-between transition-all ' style={{opacity:hide?0:1}}>
        <Link to={"/"}>
            <h1 className=' italic font-extrabold'>TestProject</h1>
        </Link>
        <div className=' flex flex-row gap-3'>
        <Link to={'/articles'}>
                <h2 className=' text-lg font-semibold'>ARTICLES</h2>
            </Link>
            <Link to={'/about'}>
                <h2 className=' text-lg font-semibold'>ABOUT</h2>
            </Link>
        </div>
    </nav>
  )
}
