import React from 'react'
import { Row, Col } from 'react-bootstrap'
import products from '../products'
import Product from '../components/Product'
function HomeScreen() {
  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => {
          return (
            <Col sm={12} md={6} xl={3}>
              <Product key={product._id} {...product} />
            </Col>
          )
        })}
      </Row>
    </>
  )
}

export default HomeScreen
