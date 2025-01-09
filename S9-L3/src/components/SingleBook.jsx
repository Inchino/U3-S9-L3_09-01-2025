/* eslint-disable react/prop-types */
import { Card, Col, Row } from 'react-bootstrap';

const SingleBook = (props) => {
  return (
    <Row className="justify-content-evenly" >
          <Col xs={12} md={3} key={props.book.asin}>
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.book.img}/>
      <Card.Body>
        <Card.Title>{props.book.title}</Card.Title>
        <Card.Text>
          <p>{props.book.category}</p>
          <p>{props.book.price}€</p>
        </Card.Text>
      </Card.Body>
    </Card>
          </Col>
    </Row>
  )
}

export default SingleBook;