import React from 'react'
import './Footer.css'
export default function Footer() {
  return (
    <div>
        <footer className='footer' >
            <p> 2024 All Rights reserved</p>
            <nav className='footer-nav'>
                <ul>
                   <li><a href="/privacy">Privacy</a></li>
                   <li><a href="/terms">Terms</a></li>
                </ul>
            </nav>
        </footer>
    </div>
  )
}
