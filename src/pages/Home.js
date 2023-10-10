import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../index.css'; // You can create a CSS file for additional styling

// Import other components (About, Pricing, etc.)
import About from './About';
import Pricing from './Pricing';
import Product from './Products';
import Register from './Register';
import Login from './Login';
import Footer from '../Components/Footer';

// Import your slider images
import image1 from '../Components/image1.jpg';
import image2 from '../Components/image2.jpg';
import image3 from '../Components/image3.jpg';

function Home() {
  return (
    <div className="page">
    
      {/* <div className="background-container"> */}
   
        {/* <Carousel showArrows={false} showThumbs={false} infiniteLoop autoPlay>
          <div>
            <img src={image1} alt="Image 1" />
          </div>
          <div>
            <img src={image2} alt="Image 2" />
          </div>
          <div>
            <img src={image3} alt="Image 3" />
          </div>
        </Carousel> */}
      {/* </div> */}

      <h1>Welcome to Rabbit Queen Farm</h1>
      <p>Your source for delightful and entertaining rabbit videos in Kangundo, Kenya!</p>

      {/* Include content from other components */}
      <About />
      <Pricing />
      <Product />
      <Register />
      <Login />
      

      {/* You can also add other content specific to the Home page here */}
    </div>
  );
}

export default Home;