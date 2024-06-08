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
          <input type ='text' value={value} onInput={(e) => setValue(e.target.value)} name='city' className='search in' placeholder='City'/>
          <select name="" id="" onChange={(e) => setSelect(e.target.value)}>
            <option value="temp">По умоланию</option>
            <option value="temp_min">Минимальная</option>
            <option value="temp_max">Максимальная</option>
            <option value="feels_like">По ощущениям</option>
          </select>
          <button style={{backgroundColor:'white',color:'black'}}> Get Info</button>
        </form>
      </div>
    </div>
  );
}
export default Form; 

