import React from 'react'
import { useOdontoStates } from '../Context/Context'
import Card from '../Components/Card'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const {state} = useOdontoStates()
  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
      {state.dentists.map(dentist => <Card dentist={dentist} key={dentist.id}/>)}
      </div>
    </main>
  )
}

export default Home