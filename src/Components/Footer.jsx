import React from 'react'
import { useOdontoStates } from '../Context/Context'

const Footer = () => {

  const {state} = useOdontoStates()

  return (
    <footer className='flex h-14 px-8 py-2 justify-between dark:bg-black'>
        <img src={state.theme == 'light'? 'images/DH.png' : 'images/DH.ico' } alt='DH-logo' className='dark:bg-white'/>

        <ul className='grid gap-5 grid-cols-4 content-center'>
          <li className='text-xl dark:text-white'><i  className="fa-brands fa-square-facebook"></i></li>
          <li className='text-xl dark:text-white'><i className="fa-brands fa-instagram"></i></li>
          <li className='text-xl dark:text-white'><i  className="fa-brands fa-whatsapp"></i></li>
          <li className='text-xl dark:text-white'><i  className="fa-brands fa-tiktok"></i></li>
        </ul>
    </footer>
  )
}

export default Footer
