 
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import './Slider.css';
import './All_Category.css';
import {useEffect} from "react";
import {Link} from "react-router-dom"
import rate from '../img/rate.svg'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import car_img from '../img/na1.png'
import car_img2 from '../img/na2.png'
import car_img3 from '../img/na3.png'
import car_img4 from '../img/na4.png'
import heart from '../img/heart.png'
import cart from '../img/cart.png'
  

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF,faTwitter,faInstagram} from '@fortawesome/free-brands-svg-icons';




function NewArrivals() {
  


  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3031/flowers')
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result);
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])




    

  return (
    <div className='part_catg'>
    <Container>
     


    <Row className="p-5">
 
   
                     <Col md="3">
                      <Card className="mb-4 products">
                      <Card.Body>

                      <div class="elms-animation">
                        <span class="one"></span>
                        <span class="two"></span>
                        <span class="three"></span>
                        <span class="four"></span>
                      </div>
                    <img variant="top" src={car_img} /> 

                    <div class="content d-flex flex-column ">
                      <div className='d-flex justify-content-end align-items-end icon_div'> <button><FontAwesomeIcon icon={faMagnifyingGlass} size="lg" className="m-1"  ></FontAwesomeIcon></button></div>
                      <div className='d-flex justify-content-end align-items-end icon_div'>
                        <div><img src={heart}/></div>
                        <div><img src={cart}/></div>
                      </div>
                    
                    </div>
                   
                     
                      
                        </Card.Body>
                      

                       
                     </Card>


                     <Card className="mb-4 products">
                     <Card.Title  className="">Detox Body Cream</Card.Title>


                          

                      <h2>$200.95</h2>
                     </Card>
                     </Col>

                     <Col md="3">
                      <Card className="mb-4 products">
                      <Card.Body>

                      <div class="elms-animation">
                        <span class="one"></span>
                        <span class="two"></span>
                        <span class="three"></span>
                        <span class="four"></span>
                      </div>
                    <img variant="top" src={car_img2} /> 
                    <div class="content d-flex flex-column ">
                      <div className='d-flex justify-content-end align-items-end icon_div'> <button><FontAwesomeIcon icon={faMagnifyingGlass} size="lg" className="m-1"  ></FontAwesomeIcon></button></div>
                      <div className='d-flex justify-content-end align-items-end icon_div'>
                        <div><img src={heart}/></div>
                        <div><img src={cart}/></div>
                      </div>
                    
                    </div>
                        </Card.Body>
                      

                       
                     </Card>


                     <Card className="mb-4 products">
                     <Card.Title  className="">Detox Body Cream</Card.Title>


                          

                      <h2>$200.95</h2>
                     </Card>
                     </Col>



                     <Col md="3">
                      <Card className="mb-4 products">
                      <Card.Body>

                      <div class="elms-animation">
                        <span class="one"></span>
                        <span class="two"></span>
                        <span class="three"></span>
                        <span class="four"></span>
                      </div>
                    <img variant="top" src={car_img3} /> 

                    <div class="content d-flex flex-column ">
                      <div className='d-flex justify-content-end align-items-end icon_div'> <button><FontAwesomeIcon icon={faMagnifyingGlass} size="lg" className="m-1"  ></FontAwesomeIcon></button></div>
                      <div className='d-flex justify-content-end align-items-end icon_div'>
                        <div><img src={heart}/></div>
                        <div><img src={cart}/></div>
                      </div>
                    
                    </div>
                      
                        </Card.Body>
                      

                       
                     </Card>


                     <Card className="mb-4 products">
                     <Card.Title  className="">Detox Body Cream</Card.Title>


                          

                      <h2>$200.95</h2>
                     </Card>
                     </Col>


                     <Col md="3">
                      <Card className="mb-4 products">
                      <Card.Body>

                      <div class="elms-animation">
                        <span class="one"></span>
                        <span class="two"></span>
                        <span class="three"></span>
                        <span class="four"></span>
                      </div>
                    <img variant="top" src={car_img4} /> 

                    <div class="content d-flex flex-column ">
                      <div className='d-flex justify-content-end align-items-end icon_div'> <button><FontAwesomeIcon icon={faMagnifyingGlass} size="lg" className="m-1"  ></FontAwesomeIcon></button></div>
                      <div className='d-flex justify-content-end align-items-end icon_div'>
                        <div><img src={heart}/></div>
                        <div><img src={cart}/></div>
                      </div>
                    
                    </div>
                      
                        </Card.Body>
                      

                       
                     </Card>


                     <Card className="mb-4 products">
                     <Card.Title  className="">Detox Body Cream</Card.Title>


                          

                      <h2>$200.95</h2>
                     </Card>
                     </Col>
                 
                   


                       

                  

                      
                    
                    </Row>



 </Container>
      </div>
      
 );
}
export default NewArrivals;