import Form from '../Components/Form';
import { useOdontoStates } from '../Context/Context';

const Contact = () => {
  const { state } = useOdontoStates();
  const themeClass = state.theme ? 'light' : 'dark';

  const handleSubmit = (formData) => {
    console.log("Formulario enviado:", formData);
  };

  return (
    <div className='h-screen flex flex-col justify-start p-8 items-center dark:bg-neutral-700 dark:text-white'>
      <h2 className='text-3xl font-semibold self-start'>Want to know more?</h2>
      <p className='self-start'>Send us your questions and we will contact you</p>
      <Form handleSubmit={handleSubmit}/>
    </div>
  );
}

export default Contact;