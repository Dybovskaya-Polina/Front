import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import "./main.css";
import "./form.css";

function Form ({getWeather}) {

  const [value, setValue] = useState('Moscow')
  const [select, setSelect] = useState('temp')

  async function handleSubmit(e){
    e.preventDefault()
    await getWeather({city : value.trim(), categoryTemp: select})
  }
   
  return (
    <div className="container base">
      <div style={{alignItems:'center'}}>
      <form onSubmit ={handleSubmit}  >
          <input className='text-search' type ='text' value={value} onInput={(e) => setValue(e.target.value)} name='city' placeholder='City'/>
          <select className='text-search' defaultValue="temp" onChange={(e) => setSelect(e.target.value)}>
            <option value="temp">Average</option>
            <option value="temp_min">Minimum</option>
            <option value="temp_max">Maximum</option>
            <option value="feels_like">Feels like</option>
          </select>
          <button className='button'> Get Info</button>
        </form>
      </div>
    </div>
  );
}
export default Form; 

