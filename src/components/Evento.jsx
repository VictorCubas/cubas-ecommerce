import React from 'react';

const Evento = ({evento}) => {
  return (
    // <p className="text-white" >{evento.name}</p>
    <article className="product">
      <img src={evento.image} alt={evento.name} />
      <div className="product-content">
        <div>
          <h3>{evento.name}</h3>
          <p className='product-price'>${evento.price}</p>
          <p>{evento.description}</p>
          <p>{evento.date}</p>
        </div>
        <p className='product-actions'>
          {/* <button onClick={() => addItemToCart(id)}>Add to Cart</button> */}
          <button>Add to Cart</button>
        </p>
      </div>
    </article>
  )
}

export default Evento