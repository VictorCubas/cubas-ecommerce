import React from 'react'

const Welcome = ({greeting, category}) => {
  return (
    <div className="mb-8 bg-gradient-to-r from-[#252547] to-[#1e1e42] rounded-lg p-6 shadow-lg mx-5 lg:mx-28">
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-2 uppercase">{greeting}</h1>

        {category && <h1 className="text-2xl md:text-3xl font-bold text-green-200 uppercase"> {category}</h1>}
        {!category && <p className="text-gray-300">
            Descubre los mejores eventos en Paraguay: conciertos, deportes, teatro y mucho más.
        </p>}
    </div>
  )
}

export default Welcome