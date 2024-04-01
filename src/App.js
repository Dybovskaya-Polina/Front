import './App.css';
import React, { useState , useEffect} from "react";
import { Container, NavDropdown ,Row, Col,Navbar,Form, Button,FormLabel, FormControl,Card,ListGroup, CardBody, FormSelect } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';
import plant from "./plant.json";

import './styles/index.css'
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

const list = plant;
const list1= [{family: 'Fabaceae'},{family:'Rosaceae'}];

function SearchPlants(){
  
  const useStorageState = (initState) =>{
    const [loginTerm,setLoginTerm] =useState(localStorage.getItem('login') || initState);

    useEffect(() =>{
      localStorage.setItem('login',loginTerm);
    },[loginTerm] );
    
    return [loginTerm,setLoginTerm]; 
 }
  
  const[searchTerm,setSearchTerm]= useState('');
  const[filterTerm,setFilterTerm]=useState('');
  const [loginTerm, setLogin] = useStorageState('default');
  console.log(loginTerm)
  
  const loginChange = (event) =>
  {
    console.log('infa')
    setLogin(event.target.value);
  }

  const handleChange = (event) =>
  {
    setSearchTerm(event.target.value);
  }
  const filterChange = (event) =>
  {
    
    setFilterTerm(event.target.value);
  }
 
  const searchCards = list.filter(function (item){
    return  filterTerm!='' ? item.name.toLowerCase().includes(searchTerm.toLowerCase()) & item.family ==filterTerm: item.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const families = Array.from(new Set(list.map(function(item){
    return item.family;
  })));




  return (
    <div>
      <Navbar className="bg-body-tertiary justify-content-between" style={{marginLeft:'20px'}}>
        <Form >
          <Row>
            <Col xs="auto">
              <Form.Control
                type="text"
                placeholder="Search"
                className=" mr-sm-2"
                id='search' 
                onChange={handleChange}
              />
            </Col>
            </Row>
            </Form>
            <Form>
            <Row>
            <Col xs="auto">
              <Form.Control
                type="text"
                placeholder="Login"
                className=" mr-sm-2"
                id='search' 
                onChange={loginChange}
              />
            </Col>
            </Row>
        </Form>
        <Form >
        <FormSelect aria-label='Choose family' style={{width:'300px'}} onChange ={filterChange} >
          <option value=''>Choose family</option>
        <ListFamily list={families}/>
        </FormSelect>
      </Form>
      </Navbar>
      
      <ListPlant  list ={searchCards}/>
      
    </div>
  )  
  
}

const ListPlant =(props) =>{
  return (
    <div >
      <Row >
        {props.list.map(function(item)
        {
          return <Col key={item.id}>
            <Card style={{ width: '18rem',height:'18rem', background: '#385c40', margin:'1rem',alignContent: 'flex-end'}}>
              <Card.Body style={{ minWidth: '15rem',minHeight:'16rem'}}>
                <Card.Title style ={{color:'white'}}>{item.name}</Card.Title>
                <ListGroup >
                  <ListGroup.Item><strong>Sience name:</strong>  {item.scientific_name}</ListGroup.Item>
                  <ListGroup.Item> <strong>Family:</strong> {item.family}</ListGroup.Item>
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

const ListFamily = (props) =>{
  return (
    <>
    {props.list.map(function(item){
      return <option className='family'>{item}</option>
    })}
</>
  );
}

function App() {
  return (
    <div className="App" >
     
      <SearchPlants/>

    </div>
  );
}
export default App;
