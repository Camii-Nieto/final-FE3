import React from 'react'
import { Link } from 'react-router-dom'
import { useOdontoStates } from '../Context/Context'
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const {dispatch} = useOdontoStates()

  const setTheme = () => {
    dispatch({type: 'SWITCH_THEME'})
}

  return (
    <nav className='flex justify-between p-3 bg-zinc-100'>
      <h1 className='text-xl font-semibold'>DH Odonto</h1>
      <div className="cont-der flex">
      <ul className='grid gap-8 grid-cols-4 content-center'>
        <Link to='/'>Home</Link>
        <Link to='/favs'>Favs</Link>
        <Link to='/contact'>Contact</Link>
      </ul>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick={setTheme} className='border-2 rounded-lg  border-gray-300 p-1 bg-black'>🌙</button>
      </div>
    </nav>
  )
}

export default Navbar