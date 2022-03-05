import React from 'react';
import {Card, Container,CardGroup ,Row} from 'react-bootstrap'

 function Contact () {
        return (
            <Container>

              <Row className='team'>

                <p style={{color :'#61361c'}}>Thanks to you for using our website, If you have any concerns or questions feel free to contact us.</p>

<CardGroup>
  <Card>
    <Card.Body>
      <Card.Title>Nick Duval</Card.Title>
      <Card.Text>
<p>Worked on :</p>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <Card.Link href='https://github.com/npduval' target="_blank">Github</Card.Link>
      <Card.Link href='https://github.com/npduval' target="_blank">Linkedin</Card.Link>
      <Card.Link href='https://github.com/npduval' target="_blank">Mail</Card.Link>
    </Card.Footer>
  </Card>

  <Card>
    <Card.Body>
      <Card.Title>Hunter Zandri</Card.Title>
      <Card.Text>
<p>Worked on :</p>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <Card.Link href='https://github.com/Hunter-Zandri' target="_blank">Github</Card.Link>
      <Card.Link href='https://github.com/npduval' target="_blank">Linkedin</Card.Link>
      <Card.Link href='https://github.com/npduval' target="_blank">Mail</Card.Link>
    </Card.Footer>
  </Card>

   <Card>
    <Card.Body>
      <Card.Title>Meryem Adiri</Card.Title>
      <Card.Text>
<p>Worked on :</p>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <Card.Link href='https://github.com/MERYEM-AD' target="_blank">Github</Card.Link>
      <Card.Link href='https://github.com/npduval' target="_blank">Linkedin</Card.Link>
      <Card.Link href='https://github.com/npduval' target="_blank">Mail</Card.Link>
    </Card.Footer>
  </Card>
</CardGroup>

            
</Row>
            </Container>
        )

}

export default Contact;