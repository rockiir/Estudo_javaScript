import { Carousel } from 'react-bootstrap';
//import api from '../../services';
import './header.css';

function banner() {
    
    return (
      <Carousel>
       
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.imgur.com/5PpIWOY.jpeg"
            alt="Second slide"
          />
  
          <Carousel.Caption>

            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  
  export default banner;