import React from 'react';
import {Card} from 'react-bootstrap'

 function Contact () {
        return (
            <div>
       <Card>

<Card.Header style ={{fontSize:20 ,color :'orange'}}>Team</Card.Header>
<Card.Body>
  <Card.Title>Nick Duval</Card.Title>
  <Card.Text>
 Role in the Project
  </Card.Text>

  <Card.Link href="#">Github</Card.Link>
  <Card.Link href="#">Linkedin</Card.Link>
  <Card.Link href="#">Mail</Card.Link>

</Card.Body>



<Card.Body>
  <Card.Title>Hunter Zandri</Card.Title>
  <Card.Text>
  Role in the Project
  </Card.Text>

  <Card.Link href="#">Github</Card.Link>
  <Card.Link href="#">Linkedin</Card.Link>
  <Card.Link href="#">Mail</Card.Link>

</Card.Body>



<Card.Body>
  <Card.Title>Meryem ADIRI</Card.Title>
  <Card.Text>
  Role in the Project
  </Card.Text>

  <Card.Link href="#">Github</Card.Link>
  <Card.Link href="#">Linkedin</Card.Link>
  <Card.Link href="#">Mail</Card.Link>

</Card.Body>

</Card>



            </div>
        )

}

export default Contact;