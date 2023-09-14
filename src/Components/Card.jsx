import React from "react";
import { Link } from 'react-router-dom'
import { useOdontoStates } from "../Context/Context";


const Card = ({dentist}) => {

  const {dispatch} = useOdontoStates()
  const addFav = () => {
      dispatch({type: 'ADD_FAV', payload: dentist})
  }

  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
        {/* <Link to={`/detail/${char.id}`}> */}
        <img src='images/doctor.jpg' alt=""/>
        <Link to={'/detail/' + dentist.id}>
            <h3>{dentist.name}</h3>
        </Link>
            <h4>{dentist.username}</h4>
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
