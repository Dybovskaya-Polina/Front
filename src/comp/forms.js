import React from 'react';
import Button from 'react-bootstrap/Button';
import "./main.css";


class Form extends React.Component {
    render (){
        return (
            <div className="container" style={{ height:'70px',backgroundColor:'black', alignItems:'center'}}>
            <div style={{alignItems:'center'}}>
            <form onSubmit ={this.props.weatherMethod}  >
                <input type ='text' name='city' className='search in' placeholder='City'/>
                <button style={{backgroundColor:'white',color:'black'}}> Get Info</button>
              </form>
              </div>
              </div>
        );
    }
}
export default Form; 

/*
import React from 'react';
import Button from 'react-bootstrap/Button';
import "./main.css";


class Form extends React.Component {
    render (){
        return (
            <div className="container d-flex justify-content-center align-items-center" style={{ height:'80px',backgroundColor:'black'}}>
            
            <form onSubmit ={this.props.weatherMethod} style={{}} >
                <input type ='text' name='city' placeholder='City'/>
                <button> Get Info</button>
              </form>
              </div>
        );
    }
}
export default Form; 

<form onSubmit ={this.props.weatherMethod} >
                <input type ='text' name='city' placeholder='City'/>
                <button> Get Info</button>
            </form>

<div  className="wrapper" style={{backgroundImage:{u}}} >
        <div className='main'>
      <div style={{alignItems:'center'}} >
        <div className='container'>
          <div className='row'>
            <div className='col-xs-5'>Lala</div>
            <div className='col-xs-7'>
            <Form weatherMethod={this.getWeather}/>
            <Info 
                temp={this.state.temp} 
                city={this.state.city} 
                country={this.state.country}
                weather={this.state.weather}
                error={this.state.error}

            />  
            </div>
            </div>
          </div>
        </div>
        
      </div>
    </div> 
   */