import React from 'react'

const Footer = () => {
  return (
    <footer className='flex h-14 px-8 py-2 justify-between'>
        <img src='images/DH.png' alt='DH-logo' />

        <ul className='grid gap-5 grid-cols-4 content-center'>
          <li className='text-xl'><i  className="fa-brands fa-square-facebook"></i></li>
          <li className='text-xl'><i className="fa-brands fa-instagram"></i></li>
          <li className='text-xl'><i  className="fa-brands fa-whatsapp"></i></li>
          <li className='text-xl'><i  className="fa-brands fa-tiktok"></i></li>
        </ul>
    </footer>
  )
}

export default Footer
