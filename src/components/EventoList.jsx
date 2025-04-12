import React from 'react'
import Evento from './Evento'

const EventoList = ({eventos}) => {
  let content;

  if(eventos.length > 0){
    content = eventos.map((evento) => {
            return <li key={evento.id}>
                <Evento evento={evento}/>
            </li>
        });
  }
  else{
    content = <p className="mt-5 pt-5 font-bold uppercase text-white text-center w-full text-2xl">No hay datos por mostrar en esta categoria</p>
  }

  return (
    <>
      <section id="shop">
        <ul id="products">
          {content}
        </ul>
      </section>
    </>

    
  )
}

export default EventoList