/* eslint-disable react/prop-types */
import { Component } from "react";
import { Card, Col, Row } from "react-bootstrap";

{
  /*const SingleBook = (props) => {
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

export default SingleBook;*/
}

class SingleBook extends Component {
  state = {
    selected: false,
  };
  render() {
    return (
      <Row className="justify-content-center m-2">
        <Col xs={12} md={4} key={this.props.book.asin}>
          <Card
            style={{ width: "18rem" }}
            onClick={(e) =>
              this.setState({
                state: {
                  selected: e ? false : true,
                },
              })
            }
          >
            <Card.Img variant="top" src={this.props.book.img} />
            <Card.Body>
              <Card.Title>{this.props.book.title}</Card.Title>
              <Card.Text>{this.props.book.category}</Card.Text>
              <Card.Text>{this.props.book.price}€</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default SingleBook;
