import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <footer className='my-10  '>
      <div className="l-container ">
        <div className="footer-wrapper justify-between flex-wrap md:flex-nowrap flex flex-row gap-10">
          <div className='md:w-3/12'>
            <div>Empluy</div>
            <p>Copyright &copy; 2024 Empluy</p>
            <p>All rights reserved</p>
          </div>
          <div className="developers">
            <ul>
              <li>Developers</li>
              <li><Link href=''>Overview</Link></li>
              <li><Link href=''>Documentation</Link></li>
              <li><Link href=''>Integration</Link></li>
              <li><Link href=''>Status page</Link></li>
            </ul>
          </div>
          <div className="support">
            <ul>
            <li>Support</li>
            <li>Help</li>
            <li>Status</li>
            </ul>
          </div>
          <div className="contact">
            <ul>
              <li>Contact Us</li>
              <li>Email</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
