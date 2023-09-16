import React, { useState, useEffect } from 'react'
import { useOdontoStates } from '../Context/Context'
import { useParams } from 'react-router-dom'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {

  const {state, dispatch} = useOdontoStates()
  const [loading, setLoading] = useState(true)
  const {id} = useParams()
  const {name,email,phone,website} = state.dentist
  console.log(id)
  const url = 'https://jsonplaceholder.typicode.com/users/' + id

  useEffect(() => {
      fetch(url)
      .then(res => res.json())
      .then(data => {
          dispatch({type: 'GET_DENTIST', payload: data})
          setLoading(false)
      })
  }, [])
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  return (
    <main className='h-screen flex flex-col justify-start p-8 items-center dark:bg-neutral-700 dark:text-white'>
      <h1 className='text-3xl font-semibold'>Detail Dentist {id} </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <table className="table-fixed w-full text-center mt-10 border-2 rounded-lg  border-gray-200">
      <thead className='border-2 rounded-lg  border-gray-200'>
          <tr className='border-2 rounded-lg  border-gray-200'>
            <th className='border-2 rounded-lg  border-gray-200'>Name</th>
            <th className='border-2 rounded-lg  border-gray-200'>Email</th>
            <th className='border-2 rounded-lg  border-gray-200'>Website</th>
            <th className='border-2 rounded-lg  border-gray-200'>Phone</th>
          </tr>
        </thead>
        <tbody className='border-2 rounded-lg  border-gray-200'>
          <tr>
            <td className='border-2 rounded-lg  border-gray-200'>{name}</td>
            <td className='border-2 rounded-lg  border-gray-200'>{email}</td>
            <td className='border-2 rounded-lg  border-gray-200'>{website}</td>
            <td className='border-2 rounded-lg  border-gray-200'>{phone}</td>
          </tr>
        </tbody>
      </table>
    </main>
  )
}

export default Detail