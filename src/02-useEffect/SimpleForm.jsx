import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

  const [formState, setFormState] = useState({
    username: 'jpaucar',
    email: 'jpaucar@google.com'
  });

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [ name ]: value 
    })
  }

  useEffect(() => {
    console.log('useEffect has been called!')
  }, []); 
  // si el arreglo esta vacio, significa que el useEffect solo se llamara una vez

  useEffect(() => {
    console.log('formState Changed!')
  }, [formState]); 
  // El useEffect se llamara cuando exista un cambio en formState

  useEffect(() => {
    console.log('email Changed!')
  }, [email]); 
  // El useEffect se llamara cuando exista un cambio solo en el email



  return (
    <>
      <h1>Formulario Simple</h1> 
      <hr />

      <input 
        type="text" 
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />

      {
        (username === 'jpaucar2') && <Message />
      }

      <input 
        type="email" 
        className="form-control mt-2"
        placeholder="example@email.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />
    </>
  )
}