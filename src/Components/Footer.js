import React from 'react';

const Footer = () => {
    
   
  return (
    <div className="small-footer">
      <div className="container">
        <div className="row">
          {/* Column 1 */}
          <div className="col">
            <h4>Contact Information</h4>
            <ul className="unorderlist">
              <li>Phone: 0790 344 5677</li>
              <li>Location: Kangundo, Kenya</li>
              <li>Email: info@rabbitqueenfarm.com</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="col">
            <h4>Follow Us</h4>
            <ul className="unorderlist">
              <li>
                <a href="https://www.facebook.com/rabbitqueenfarm" target="_blank" rel="noopener noreferrer">
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/rabbitqueenfarm" target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
              </li>
              {/* Add links to other social media profiles */}
            </ul>
          </div>

          {/* Column 3 */}
          <div className="col">
            <h4>Quick Links</h4>
            <ul className="unorderlist">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/products">Our Products</a>
              </li>
              {/* Add links to other relevant pages */}
            </ul>
          </div>
        </div>
        <hr />
        <div className="row2">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Rabbit Queen Farm | All rights reserved |{' '}
            <a href="/privacy">Privacy Policy</a> | <a href="/terms">Terms of Service</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
