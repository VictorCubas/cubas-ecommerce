import React from 'react'
import ItemCounter from './ItemCounter'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const ItemDetail = ({event}) => {
  const onAdd = (quantity) => {
    alert(`Agregaste ${quantity} unidades al carrito`);
  }

  return (
    <div className='flex justify-center'>
      <Card className="w-full max-w-[80rem] flex-col md:flex-row">
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 w-full md:w-3/5 shrink-0 rounded-r-none"
        >
          <img
            src={event.image}
            alt={event.name}
            className="h-full w-full object-contain"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h6" color="gray" className="mb-4 uppercase">
            {event.name}
          </Typography>
          <Typography variant="h4" color="blue-gray" className="mb-2">
            ${event.price}
          </Typography>
          <Typography color="gray" className="mb-5 font-normal">
            {event.description}
          </Typography>
          <Typography color="gray" className="mb-5 font-normal">
            {event.place}
          </Typography>
          <Typography color="gray" className="mb-5 font-normal">
            {event.date}
          </Typography>

          <ItemCounter stock={event.stock} addItemToCart={onAdd}/>
        </CardBody>
    </Card>

    </div>
  )
}

export default ItemDetail