import React from 'react';
import {Card, Container,CardGroup ,Row} from 'react-bootstrap'

import {GoMarkGithub} from 'react-icons/go';
import {BsLinkedin} from 'react-icons/bs';
import {AiFillMail} from 'react-icons/ai';


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
<p>Worked on : Front End - Back End</p>
      </Card.Text>
    </Card.Body>
    <Card.Footer style={{ display:'flex' , justifyContent:'center' }}>
     <Card.Link href='https://github.com/npduval' target="_blank"> <GoMarkGithub style={{fontSize : 35}} /> </Card.Link>
      <Card.Link href='https://www.linkedin.com/in/nicholas-duval-mba-303688163' target="_blank"><BsLinkedin style={{fontSize : 35}} /></Card.Link>
      <Card.Link href='mailto:Nicholspduval74@gmail.com' target="_blank"><AiFillMail style={{fontSize : 35}} /></Card.Link>
    </Card.Footer>
  </Card>

  <Card>
    <Card.Body>
      <Card.Title>Hunter Zandri</Card.Title>
      <Card.Text>
      <p>Worked on : Back End</p>
      </Card.Text>
    </Card.Body>
    <Card.Footer style={{ display:'flex' , justifyContent:'center' }}>
    <Card.Link href='https://github.com/Hunter-Zandri' target="_blank"> <GoMarkGithub style={{fontSize : 35}} /> </Card.Link>
      <Card.Link href='https://www.linkedin.com/in/hunter-zandri-ba12551bb' target="_blank"><BsLinkedin style={{fontSize : 35}} /></Card.Link>
      <Card.Link href='mailto:Zandrihunter@gmail.com' target="_blank"><AiFillMail style={{fontSize : 35}} /></Card.Link>
    </Card.Footer>
  </Card>

   <Card>
    <Card.Body>
      <Card.Title>Meryem Adiri</Card.Title>
      <Card.Text>
      <p>Worked on : Front End - Back End</p>
      </Card.Text>
    </Card.Body>
    <Card.Footer style={{ display:'flex' , justifyContent:'center' }}>
    <Card.Link href='https://github.com/MERYEM-AD' target="_blank"> <GoMarkGithub style={{fontSize : 35}} /> </Card.Link>
      <Card.Link href='https://www.linkedin.com/in/meryem-adiri-32748221b/' target="_blank"><BsLinkedin style={{fontSize : 35}} /></Card.Link>
      <Card.Link href='mailto:adiri.meryem.mw@gmail.com' target="_blank"><AiFillMail style={{fontSize : 35}} /></Card.Link>
    </Card.Footer>
  </Card>
</CardGroup>

            
</Row>
            </Container>
        )

}

export default Contact;