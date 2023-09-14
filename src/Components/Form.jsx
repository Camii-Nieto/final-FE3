import React from "react";


const Form = ({setUser, handleSubmit}) => {
  //Aqui deberan implementar el form completo con sus validaciones

  const handleChange = (event) => {
    setUser((prevUser) => {
        return {
            ...prevUser,
            [event.target.name]: event.target.value
        }
 })
}

  return (
    <div>
      <form>
      <label htmlFor="nombre">Ingrse su nombre completo</label>
        <input name='nombre' type="text" onChange={handleChange}/>
        <label htmlFor="mail">Ingrse su mail</label>
        <input  name='mail' type="email" onChange={handleChange}/>
        <button >Enviar</button>
      </form>
    </div>
  );
};

export default Form;
