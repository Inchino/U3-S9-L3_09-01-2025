/* eslint-disable react/prop-types */
import SingleBook from "./SingleBook";
import {Container} from "react-bootstrap";

function BookList(props){
    return(
        <>
        <Container className="d-flex flex-wrap justify-content-center gap-3">
            {props.list.map((libro) =>{
                return <SingleBook key={libro.asin} book={libro}/>
            })}
        </Container>
        </>
    );
};

export default BookList;