import './App.css';
import React, { useState , useEffect} from "react";
import { Container, Row, Col, Button, FormControl,Card,ListGroup, CardBody } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';
import plant from "./plant.json";

function InputOutputField() {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");

  const textChange = (e) => {
    setInputText(e.target.value);
    setOutputText(e.target.value);
  };

  const fieldsClear = () => {
    setInputText("");
    setOutputText("");
  };

  return (
    <Container>
      <Row className="my-3">
        <Col>
          <FormControl
            type="text"
            placeholder="Розы рамблер - топ!"
            value={inputText}
            onChange={textChange}
          />
        </Col>
      </Row>
      <Row className="my-3">
        <Col>
          <FormControl
            type="text"
            placeholder="Напишите, что розы рамблер - топ!"
            value={outputText}
            readOnly
            disabled
          />
        </Col>
      </Row>
      <Row className="my-3">
        <Col>
          <Button variant="light" onClick={fieldsClear}>
            Очистить
          </Button>
        </Col>
      </Row>
      <Row></Row>
    </Container>
  );
}

function Roses() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item >
        <img
        src="https://i.pinimg.com/736x/7d/b6/d3/7db6d36235a53caa14aa6a7b3eb1b3a8.jpg"
          alt="First slide"
          style={{ width: "900px", height: "700px" }} 
        />
       <Carousel.Caption style={{background:'white'}}>
          <h3>Розы "Rambler"</h3>
          <h5>используемые для украшения фасадов, архитектурных форм, пергол и райских садов</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
      src="https://cdn.mos.cms.futurecdn.net/LSZvZAos9WpKchbgF9U76K.jpg"
      
          alt="First slide"
          style={{ width: "900px", height: "700px" }} 
        />
        <Carousel.Caption style={{background:'white'}}>
          <h3>"Вьющиеся розы"</h3>
          <h5>гибкие тонкие ветви плетистой розы, могут вырастать до 6 метров в длину. </h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          src="https://www.capegazette.com/sites/capegazette/files/2021/08/field/image/_--roses-Fleurs_de_Rosa_banksiae_'Lutea'-(1)-WIKIPEDIA.jpg"
          alt="First slide"
          style={{ width: "900px", height: "700px" }} 
        />
        <Carousel.Caption style={{background:'white'}}>
          <h3>Рамблеры oтличаются</h3>
          <h5>
          пышными, маленькими розовыми цветками, собранными в большие, красивые соцветия.
          </h5>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
function App() {
  return (
    <div className="App" >
      <Roses/>
      <SearchPlants/>

    </div>
  );
}
const list = plant;

function SearchPlants(){
  const[searchTerm]= useState('');
  const[setSearchTerm]= useState('');
  const searchCards = list.filter(function (item){
    return item.name.includes(searchTerm);
  });

  const handleChange = (event) =>
  {
    setSearchTerm(event.target.value);
  }
  
  return (
    <div>
      <h1> What.....</h1>
      <label htmlFor='search'>Search:</label>
      <input id='search' type ='text' onChange={handleChange} style ={{marginTop:"40px", marginBottom:'40px'}}></input>
      <p>Search for <strong>{searchTerm}</strong></p>
      <ListPlant list ={searchCards}/>
    </div>
  )

}
const ListPlant =(props) =>{
  return (
    <div>
      <Row>
        {props.list.map(function(item)
        {
          return <Col key={item.id}>
            <Card style={{ width: '18rem',height:'18rem', background: '#385c40', margin:'1rem'}}>
              <Card.Body>
                <Card.Title style ={{color:'white'}}><span style={{fontSize:'12px', textAlign: 'left' , textIndent:'3rem'}}>{item.id} </span>{item.name}</Card.Title>
                <ListGroup>
                  <ListGroup.Item><strong>Sience name:</strong>  {item.scientific_name}</ListGroup.Item>
                  <ListGroup.Item> <strong>Family:</strong> {item.scientific_name}</ListGroup.Item>
                  <ListGroup.Item> <strong>code:</strong> {item.code}</ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        })}
      </Row>
    </div>
  );
}






export default App;
