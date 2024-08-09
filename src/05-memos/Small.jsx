import React from "react"

// El memo nos ayuda a evitar que el componenete hijo se vuelva a renderizar cuando hay un cambio en el componente padre, es recomendable solo hacerlo cuando hay una perdida considerable en el rendimiento del app, sino no es necesario

export const Small = React.memo( ({ value }) => {

  console.log('Me volvi a dibujar :(')

  return (
    <small>{ value }</small>
  )
} )
