import React from "react"
import Card from "../Components/Card"
import { useOdontoStates } from '../Context/Context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const {state} = useOdontoStates()

  return (
    <main className="flex flex-col items-center justify-center dark:bg-neutral-700" >
    <h1 className='text-4xl font-bold my-8'>Dentists Favs</h1>
    <div className="grid gap-10 grid-cols-4 content-center px-32 py-8">
    {state.favs.map(dentist => <Card dentist={dentist} key={dentist.id}/>)}
    </div>
  </main>
  );
};

export default Favs;
