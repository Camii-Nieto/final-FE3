import { useState } from "react";

const Form = ({ handleSubmit }) => {
  const [formData, setFormData] = useState({
    nombre: "",
    mail: "",
  });

  const [errors, setErrors] = useState({
    nombre: "",
    mail: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    if (formData.nombre.trim() === "") {
      newErrors.nombre = "El nombre es obligatorio";
      valid = false;
    }

    if (formData.nombre.trim().length < 5) {
      newErrors.nombre = "El nombre debe tener al menos 5 caracteres";
      valid = false;
    }

    if (formData.nombre.trim().length > 30) {
      newErrors.nombre = "El nombre debe tener menos de 30 caracteres";
      valid = false;
    }


    if (formData.mail.trim().length < 5) {
      newErrors.mail = "El mail debe tener al menos 5 caracteres";
      valid = false;
    }

    if (formData.mail.trim().length > 30) {
      newErrors.mail = "El mail debe tener menos de 30 caracteres";
      valid = false;
    }

    if (formData.mail.trim() === "") {
      newErrors.mail = "El correo electrónico es obligatorio";
      valid = false;
    }

    if (!formData.mail.includes("@")) {
      newErrors.mail = "El correo electrónico debe ser un email válido";
      valid = false;
    }

    if (!formData.mail.includes(".")) {
      newErrors.mail = "El correo electrónico debe ser un email válido";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      handleSubmit(formData);
      console.log(1);
      setSubmitted(true);
    }
  };

  const handleRedirect = () => {
    window.location.href = "/";
  };

  return (
    <div className="w-full flex flex-col justify-center items-center mt-8">
      {submitted ? (
        <div className="flex flex-col justify-center items-center">
          <p className="text-xl mt-8">Gracias {formData.nombre}, te contactaremos lo antes posible vía correo electrónico.</p>
          <button className="border-2 rounded-lg px-10 py-2 mt-4" onClick={handleRedirect}>Volver al inicio</button>
        </div>
      ) : (
        <form onSubmit={handleFormSubmit} className="flex flex-col justify-center items-center w-3/4">
          <label className="flex flex-col w-full font-semibold mb-4">
            Ingrese su nombre
            <input
              name="nombre"
              type="text"
              value={formData.nombre}
              onChange={handleChange}
              className="w-full h-10 mt-4 border-2 rounded-lg dark:text-black"
            />
          </label>
            {errors.nombre && <p className="error">{errors.nombre}</p>}
          <label className="flex flex-col w-full font-semibold">
            Ingrese su mail
            <input
              name="mail"
              type="email"
              value={formData.mail}
              onChange={handleChange}
              className="w-full h-10 mt-4 border-2 rounded-lg dark:text-black"
            />
            {errors.mail && <p className="error">{errors.mail}</p>}
          </label>
          <button type="submit" className="border-2 rounded-lg px-10 py-2 mt-4">Enviar</button>
        </form>
      )}
    </div>
  );
};

export default Form;
