import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import { Container, Row, Col, Button, FormControl,Card,ListGroup } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';


  const Rose ={
    info1: 'James Stron',
    info2:'',
    info3:''
    
    
}
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
      <InputOutputField />
    </div>
  );
}

export default App;
