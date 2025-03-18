import React from 'react'

const ItemDetail = ({event}) => {
  return (
    <div className="text-lg font-bold uppercase text-white">
        <p>{event.name}</p>
        <p>${event.price}</p>
        <p>{event.description}</p>
        <p>{event.place}</p>
        <p>{event.date}</p>
        <img src={event.image} alt={event.name} />
    </div>
  )
}

export default ItemDetail