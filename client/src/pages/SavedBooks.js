import React from "react";
import {
  Container,
  Card,
  Button,
  Row,
} from "react-bootstrap";

import { useQuery, useMutation } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";
import { REMOVE_BOOK } from "../utils/mutations";
import { removeBookId } from "../utils/localStorage";

import Auth from "../utils/auth";

const SavedBooks = () => {
  const { loading, data } = useQuery(QUERY_ME);

  const [removeBook, { error }] = useMutation(REMOVE_BOOK);

  // const userData = data?.me || {};

  // create function that accepts the book's mongo _id value as param and deletes the book from the database
  const handleDeleteBook = async (bookId) => {
    // get token
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const { data } = await removeBook({
        variables: { bookId },
      });

      // upon success, remove book's id from localStorage
      removeBookId(bookId);
    } catch (err) {
      console.error(err);
    }
  };

  return loading ? (
    <h2>LOADING...</h2>
  ) : (
    <>
      <Container>
      <h2 style = {{color :'chocolate' , textAlign :'center'}}>
          {data.me.cart?.length
            ? `Viewing ${data.me.cart.length} saved ${
                data.me.cart.length === 1 ? "book" : "books"
              }:`
            : "You have no saved books!"}
        </h2>
        <Row>
          {data.me.cart?.map((book) => {
            return (
              <Card className="sm" style={{ maxWidth: '25rem' , margin : 10}} key={book.bookId} border="dark">
                {book.image ? (
                  <Card.Img style={{ maxWidth: '90%' }} 
                    src={book.image}
                    alt={`The cover for ${book.title}`}
                    variant="top"
                  />
                ) : null}
                <Card.Body>
                  <Card.Title>Title: {book.title}</Card.Title>
                  <p className="small">Authors: {book.authors}</p>
                  <Card.Text>Price: {book.price === 0?` ${book.price} $ (free)`: `${book.price} $`}</Card.Text>
                  <Button
                    className="btn-block btn-danger"
                    onClick={() => handleDeleteBook(book.bookId)}
                  >
                    Remove from cart
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
        </Row>
        <button className="btn-primary btn-lg">Checkout</button>
      </Container>
    </>
  );
};

export default SavedBooks;
