import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import "./main.css";


function Form ({getWeather}) {

  const [value, setValue] = useState('Moscow')
  const [select, setSelect] = useState(1)

  async function handleSubmit(e){
    e.preventDefault()
    await getWeather({city : value.trim(), categoryTemp: select})
  }
   
  return (
    <div className="container" style={{ height:'70px',backgroundColor:'black', alignItems:'center'}}>
      <div style={{alignItems:'center'}}>
      <form onSubmit ={handleSubmit}  >
          <input style={{fontSize:'20px'}} type ='text' value={value} onInput={(e) => setValue(e.target.value)} name='city' placeholder='City'/>
          <select style={{fontSize:'20px'}} defaultValue="temp" name="" id="" onChange={(e) => setSelect(e.target.value)}>
            <option value="temp">Average</option>
            <option value="temp_min">Minimum</option>
            <option value="temp_max">Maximum</option>
            <option value="feels_like">Feels like</option>
          </select>
          <button style={{backgroundColor:'white',color:'black',fontSize:'20px'}}> Get Info</button>
        </form>
      </div>
    </div>
  );
}
export default Form; 

