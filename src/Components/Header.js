
import React from 'react'
import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <div>
        <header className='header'>
        <nav className='nav'>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li> <Link to="/contacts">Contacts</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/files">Files</Link></li>
                
            </ul>

        </nav>
        </header>
    </div>
  )
}
