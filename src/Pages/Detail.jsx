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
    <>
      <h1>Detail Dentist id </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <span>{name}</span>
      <span>{email}</span>
      <span>{website}</span>
      <span>{phone}</span>
    </>
  )
}

export default Detail