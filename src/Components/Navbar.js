import image from './image.jpg'; // Adjust the path accordingly

export default function Navbar() {
  return (
    <nav className="Nav">
      <a href="#" onClick={(e) => e.preventDefault()}>
        <img src={image} alt='image' className='image' />
      </a>
      <a href="/" className="Sitetitle">Home</a>
      <ul>
        <li className="Donations">
          <a href="/pricing">Donations</a>
        </li>
        <li className="about">
          <a href="/about">About</a>
        </li>
        <li className="Register">
          <a href="/Register">Contact Us</a>
        </li>
        <li className="Login">
          <a href="/Login">Order</a>
        </li>
       
        <li className="Product">
          <a href="/Products">Events</a>
          
        </li>
      </ul>
    </nav>
  );
}

  