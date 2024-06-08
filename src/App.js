import './App.css';
import React, { useState} from "react";
import Info from './comp/weather';
import Form from './comp/forms';
import './styles/index.css'
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import A from './comp/All';
import Basic from './comp/try';
import ListGroup from 'react-bootstrap/ListGroup';
import CurrentWeather from './comp/try';
import Weather from './comp/main';
class App extends React.Component {

  state ={
    url:'https://img.freepik.com/free-vector/winter-blue-and-pink-gradient-background-vector_53876-117276.jpg?size=626&ext=jpg&ga=GA1.1.1908636980.1711929600&semt=ais',
    icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2jGIDAIDZPGHKtrUWlpBe7Pt6Jgm1BFIT8ChJdsH3ew&s',
    temp: 'C K F',
    city: 'Your City',
    country: '',
    weather: 'Future Weather',
    error: ""
  }
  
  getWeather = async(e) =>{
    e.preventDefault()
    const city=e.target.elements.city.value;
    const mykey="-I"

    const api_url_img = await 
    fetch(`https://api.unsplash.com/search/photos?page=1&query=${city}&client_id=${mykey}`);
    const dataimg = await api_url_img.json();
    
    console.log(dataimg);  
    console.log(dataimg.results[0].urls.raw);  
    let iconBaseUrl = "http://openweathermap.org/img/wn/";
    let iconFormat = ".png";

    if (city){
    const api_url = await 
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c6b109647c17a64b46e9013cea5fdbb6`);
    const data = await api_url.json();
    console.log(data);  

    this.setState({
      icon:  iconBaseUrl + data.weather[0].icon + iconFormat,
      url:dataimg.results[0].urls.raw,
      temp:data.main.temp,
      city:data.name,
      country: data.sys.country,
      weather:data.weather[0].description,
      error: undefined
    })
    const ccity=city


  }else{
    console.log("error")
    this.setState({
      icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2jGIDAIDZPGHKtrUWlpBe7Pt6Jgm1BFIT8ChJdsH3ew&s',
      url:'https://img.freepik.com/free-vector/winter-blue-and-pink-gradient-background-vector_53876-117276.jpg?size=626&ext=jpg&ga=GA1.1.1908636980.1711929600&semt=ais',
      temp:  '273.15',
      city: 'Moscow',
      country: 'Ru',
      weather: 'You can know',
      error: "Write a city"
    });
  }
  
}

  render(){

    
    return (
      
      <div >
        
        <Form weatherMethod={this.getWeather} />

        <Weather
         image={this.state.url} 
         icon={this.state.icon}
         temp={this.state.temp} 
         city={this.state.city} 
         country={this.state.country}
         weather={this.state.weather}
         />
      </div>

      
  );
  }
}
export default App;


/*
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
*/