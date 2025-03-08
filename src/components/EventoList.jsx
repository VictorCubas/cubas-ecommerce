import React from 'react'
import Evento from './Evento'
// rafce

const EventoList = ({eventos}) => {
  return (
    <>
      <section id="shop">
        <ul id="products">
          {eventos.map((evento) => {
              return <li key={evento.id}>
                  <Evento evento={evento}/>
              </li>
          })}
        </ul>
      </section>
    </>

    
  )
}

export default EventoList