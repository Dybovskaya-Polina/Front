import logo from './logo.svg';
import './App.css';
import {

  Card,
  ListGroup,

  } from "react-bootstrap";

  const Doctor ={
    name: 'James Stron',
    age: '49',
    specialization: 'Cardiologist',
    place:'St. Mary General Hospital',
    
}


function DoctorCard() {
  return (
    <center>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.garant.ru/files/7/0/1291507/v-zemskie-doktora-smogut-poyti-vrachi-predpensionnogo-vozrasta_200.jpg" />
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text>
        There is no point in saying that medicine plays an important role in the lives of all people.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Name: {Doctor.name}</ListGroup.Item>
        <ListGroup.Item>Specialization: {Doctor.specialization}</ListGroup.Item>
        <ListGroup.Item>Age: {Doctor.age}</ListGroup.Item>
        <ListGroup.Item>{Doctor.place}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="https://www.smgh.ca/">Link</Card.Link>
        
      </Card.Body>
    </Card>
    </center>
  );
}

export default DoctorCard;