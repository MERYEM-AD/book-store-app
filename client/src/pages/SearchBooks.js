import React, { useState, useEffect } from 'react';
import {
  Container,
  Col,
  Form,
  Button,
  Card,
  Row,
  Modal
} from 'react-bootstrap';

import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { SAVE_BOOK } from '../utils/mutations';
import { saveBookIds, getSavedBookIds } from '../utils/localStorage';
import Auth from '../utils/auth';

const SearchBooks = () => {

  /*
  Modal
  */


  const [show, setShow] = useState(false);


  const [currentBook,setCurrentBook] =useState({})

  const handleClose = () => setShow(false);
  const handleShow = (book) => {
  
    setCurrentBook(book);

    setShow(true);


  }

  // create state for holding returned google api data
  const [searchedBooks, setSearchedBooks] = useState([]);
  // create state for holding our search field data
  const [searchInput, setSearchInput] = useState('');

  // create state to hold saved bookId values
  const [savedBookIds, setSavedBookIds] = useState(getSavedBookIds());
// eslint-disable-next-line 
  const [saveBook, { error }] = useMutation(SAVE_BOOK);

  // set up useEffect hook to save `savedBookIds` list to localStorage on component unmount
  // learn more here: https://reactjs.org/docs/hooks-effect.html#effects-with-cleanup
  useEffect(() => {
    return () => saveBookIds(savedBookIds);
  });


  // create method to search for books and set state on form submit
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!searchInput) {
      return false;
    }

    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${searchInput}&filter=paid-ebooks`
      );

      if (!response.ok) {
        throw new Error('something went wrong!');
      }

      const { items } = await response.json();

      const bookData = items.map((book) => ({
        bookId: book.id,
        authors: book.volumeInfo.authors || ['No author to display'],
        title: book.volumeInfo.title,
        description: book.volumeInfo.description,
        image: book.volumeInfo.imageLinks?.thumbnail || '',
        categories : book.volumeInfo.categories,
        price : book.saleInfo.retailPrice.amount
      }));

      setSearchedBooks(bookData);
      setSearchInput('');
    } catch (err) {
      console.error(err);
    }
  };

  // create function to handle saving a book to our database

  const handleSaveBook = async (bookId) => {
    // find the book in `searchedBooks` state by the matching id
    const bookToSave = searchedBooks.find((book) => book.bookId === bookId);

    // get token
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {

      const { data } = await saveBook({
        variables: { bookData: { ...bookToSave } },
      });
      console.log(savedBookIds);
      setSavedBookIds([...savedBookIds, bookToSave.bookId]);
    } catch (err) {
      console.error(err);
    }
  };



  return (
    <>
<Container style={{backgroundColor:'white'}}>
  <Row>
    <Col xs={6} md={4} style={{marginTop:40}}>
      <Row>
    <Form  onSubmit={handleFormSubmit}>
            <Form.Group style ={{alignItems:'center'}}>
              <Col>
                <Form.Control
                  name="searchInput"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  type="text"
                  size="lg"
                  placeholder="Search for a book ..."
                />
              </Col>
              <Col className ="d-grid gap-2" style={{marginTop:20}}>
                <Button type="submit" variant="success">
                  Search
                </Button>
              </Col>
            </Form.Group>
        </Form>
        </Row>

        <Row style={{ marginTop :15}}>

<Form.Select aria-label="Default select example">
  <option>Sort By :</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</Form.Select>
        </Row>
    </Col>


    <Col xs={12} md={8} style = {{color :'chocolate' , textAlign :'center'}}>
    <h3>
          {searchedBooks.length
            ? `${searchedBooks.length} Results:`
            : 'No Result '}
        </h3>

        <Row className="justify-content-center">
  

            
{/* Modal */}
<Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>{currentBook.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{currentBook.description}</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>

          
{/* end Modal */}
    
          {searchedBooks.map((book) => {
            return (
              <Card className="sm" style={{ maxWidth: '18rem' , margin : 10}} key={book.bookId}>
                {book.image ? (
                  <Card.Img  style={{ maxWidth: '90%' }} 
                    src={book.image}
                    alt={`The cover for ${book.title}`}
                    variant="top"
                  />
                ) : null}
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <p className="small">Authors: {book.authors}</p>
                  <p className="small" style={{color: 'green',fontWeight: 'bold',fontStyle: 'normal'}}>Price: {book.price}</p>
    
<div className="mb-2" style={{ display: 'flex' ,flexDirection: 'column'}}>
    <Button variant="info"  onClick={()=>handleShow(book)} style={{margin :5}}> 
      About 
    </Button>{' '}                  
                   { Auth.loggedIn() &&(
                    <Button variant="success" style={{margin :5}}
                      disabled={savedBookIds?.some(
                        (savedId) => savedId === book.bookId
                      )}
            
                      onClick={() => handleSaveBook(book.bookId)}
                    >
                      {savedBookIds?.some((savedId) => savedId === book.bookId)
                        ? `Book's been Added`
                        : 'Add'}
                    </Button>
                  )}{''}

                  {Auth.loggedIn() && (

<Link  target="_blank"
        variant="warning" style={{margin :5 , backgroundColor: 'orange',padding: 8 ,borderRadius:4,color:'white',textDecoration:'unset'}}
                // reviwId = bookid
                to={`/Review/:ReviewId`}
          
              >
               Add Review
</Link>

                  )}


</div>


                </Card.Body>
              </Card>
            );
          })}
           </Row>
    </Col>
  </Row>
</Container>
      
    </>
  );
};

export default SearchBooks;
