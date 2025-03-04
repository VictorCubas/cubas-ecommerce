import React from 'react'
import Evento from './Evento'

const EventoList = ({data}) => {
  return (
    <>
      <section id="shop">
        <ul id="products">
          {data.map((evento) => {
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