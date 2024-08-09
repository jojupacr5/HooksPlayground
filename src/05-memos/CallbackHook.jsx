import { useState, useCallback, useEffect } from "react";
import { ShowIncrement } from "./ShowIncrement";
//El useCallback sirve para memorizar funciones y que estas solo se llamen una vez 
//Para pasar argumentos al useCallback se hace dentro de la funcion anonima del hook

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

  const incrementFather = useCallback(
    (value) => {
      setCounter( (c) => c + value)
    },
    []
  )

  useEffect(() => {}, [incrementFather])

  // const incrementFather = () => {
  //   setCounter(counter + 1)
  // }

  return (
    <>
      <h1>useCallBack Hook: { counter }</h1>
      <hr />

      <ShowIncrement increment={incrementFather}/>
    </>
  )
}
