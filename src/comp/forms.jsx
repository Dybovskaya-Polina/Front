import React, { useState } from 'react';
import "../styles/main.css";
import'../styles/form.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';

function Forma ({getWeather}) {

  const [value, setValue] = useState('Moscow')
  const [select, setSelect] = useState('temp')

  async function handleSubmit(e){
    e.preventDefault()
    await getWeather({city : value.trim(), categoryTemp: select})
  }
   
  return (
    <div className="container base" style={{}}>
      <div className='universe'>
      <form onSubmit ={handleSubmit}  >
      <Row>
      <Col>
      <InputGroup className="input mb-3">
        <Form.Control  value={value} onInput={(e) => setValue(e.target.value)} name='city' placeholder='City'
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
        />
      </InputGroup>
          </Col>
          <Col>
          <Form.Select className='input' defaultValue="temp" onChange={(e) => setSelect(e.target.value)}>
            <option value="temp">Average</option>
            <option value="temp_min">Minimum</option>
            <option value="temp_max">Maximum</option>
            <option value="feels_like">Feels like</option>
          </Form.Select>
          </Col>
          <Col> 
          <Button variant="outline-light"  type="submit" className='input'>Get Info</Button>
          </Col>
          </Row>
        </form>
      </div>
    </div>
    
  );
}
export default Forma;

