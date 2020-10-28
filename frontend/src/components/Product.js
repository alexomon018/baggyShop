import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Rating from './Rating'
function Product({
  _id,
  name,
  image,
  description,
  brand,
  category,
  price,
  countInStock,
  rating,
  numReviews,
}) {
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/product/${_id}`}>
        <Card.Img src={image} variant='top' />
      </Link>
      <Card.Body>
        <Link to={`/product/${_id}`}>
          <Card.Title as='div'>
            <strong>{name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as='div'>
          <Rating value={rating} text={`${numReviews} reviwes`} />
        </Card.Text>
        <Card.Text as='h3'>${price}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Product
