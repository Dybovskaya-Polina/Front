import React from 'react';
import { Card,Col ,Row} from 'react-bootstrap';
import Basic from './try';
const A = (props) => {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ paddingTop: '2em' }}>
      <Row>
      <Col>
      
      </Col>
      <Col xs lg="2">

          <div className="col-md-3 d-flex align-items-center justify-content-center">
            <Card.Img variant="top" src={props.image} style={{ width: '560px', height:'620px' }} />
          </div>

          </Col>
            </Row>
      
    </div>
  );
};

export default A;




/*
import React from 'react';
import { Card,Col } from 'react-bootstrap';
import Basic from './try';
const A = (props) => {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ paddingTop: '2em' }}>
      <Card style={{ width: '800px' , height: '620px' }}>
        <div className="row g-0">
          <div className="col-md-8">
            <Card.Body >
            <Row>
              <Col>1 of 2</Col>
              <Col>2 of 2</Col>
            </Row>
              <Card.Title>{ props.city},{ props.country}</Card.Title>
              <Card.Text>
              <div>
                    { props.city && 
                    <div>
                        <p></p>
                        
                        <p>{ props.weather}</p>
                        <p>{props.temp} K</p>
                        <img src={props.icon} style={{ width: '90px', height: '100px' }} />
                    </div>
                    }
                    <p>{ props.error}</p>
                    </div>
              </Card.Text>
            </Card.Body>
          </div>
          <div className="col-md-3 d-flex align-items-center justify-content-center">
            <Card.Img variant="top" src={props.image} style={{ width: '560px', height:'620px' }} />
          </div>
        </div>
      </Card>
      
    </div>
  );
};

export default A;





*/