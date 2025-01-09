/* eslint-disable react/prop-types */
import SingleBook from "./SingleBook";
import { Container } from "react-bootstrap";

function BookList(props) {
  return (
    <>
      <Container className="d-flex flex-wrap">
        {props.list.map((libro) => {
          return <SingleBook key={libro.asin} book={libro} />;
        })}
      </Container>
    </>
  );
}

export default BookList;
