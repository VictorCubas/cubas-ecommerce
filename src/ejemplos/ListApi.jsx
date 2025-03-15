import React from 'react'
import CardApi from './CardApi'

const ListApi = ({personajes}) => {
  return (
    <>
    {personajes.map(item => 
        <CardApi 
            key={item.id}
            personaje={item}/>)}
    </>
  )
}

export default ListApi