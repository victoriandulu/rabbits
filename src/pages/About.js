import React from 'react';
import '../App.css'; // Import the CSS file for styling
// import farmImage from './farm.jpg'; // Import an image of your farm (adjust the path)

function About() {
  return (
    <div className="About">
      <div className="InfoContainer">
    
        <h1>Welcome to Rabbit Queen Farm</h1>
        <p>
          Rabbit Queen Farm is your destination for delightful and entertaining
          rabbit videos! Join us on a journey of cuteness and joy as we
          introduce you to our adorable rabbit friends in Kangundo, Kenya.
        </p>
        <p>
          Our mission is simple: to bring smiles and happiness to your day with
          the playful and endearing antics of our fluffy companions.
        </p>
        <h2>Rabbit Entertainment</h2>
        <p>
          Dive into a world of fluffy enchantment with our collection of rabbit
          entertainment videos. Whether it's binkies, zoomies, or hilarious
          hoppy adventures, our rabbits are always ready to entertain you.
        </p>
        <p>
          Sit back, relax, and enjoy the heartwarming moments and endless
          laughter brought to you by the charming residents of Rabbit Queen
          Farm.
        </p>
        {/* <div className="VideoContainer">
          {/* Include your entertaining rabbit videos here */}
          {/* You can embed videos or provide links to them */}
        {/* </div> */} 
        <h2>Join Our Journey</h2>
        <p>
        We invite you to join us on this exciting journey of rabbit love and laughter.
         Follow our social media channels to stay up-to-date with the latest videos, adorable moments, 
        and behind-the-scenes glimpses of life at Rabbit Queen Farm. Your support means the world to us!
       </p>
        
        <h2>Get Involved</h2>
        <p>
       Are you a fellow rabbit enthusiast?
       We'd love to connect with you! Share your rabbit stories, tips,
       and cute rabbit moments with us. 
       We're always thrilled to engage with our growing community of rabbit lovers.
       </p>
        <h2>Contact Us</h2>
        <p>
          For inquiries, collaborations, or to share your own rabbit stories,
          please don't hesitate to reach out to us at{' '}
          <span className="ContactInfo">  the Contact page</span>.
        </p>
        {/* <div className="ImageContainer">
          <img
            src={farmImage}
            alt="Rabbit Queen Farm"
            className="FarmImage"
          />
        </div> */}
        
      </div>
    </div>
  );
}

export default About;
