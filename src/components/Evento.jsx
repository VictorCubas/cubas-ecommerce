import React from 'react';
import { Link } from 'react-router-dom';

const Evento = ({evento}) => {
  console.log('evento 1: ', evento);
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
          
            <Link className='button' to={`/category/${evento.category}/${evento.id}`}>
              Ver más
            </Link>
          
        </p>
      </div>
    </article>
  )
}

export default Evento