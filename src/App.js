
import './App.css';
import './index.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Pricing from './pages/Pricing';
import Product from './pages/Products';
import Register from './pages/Register';
import Login from './pages/Login';
import rabbit from './Components/rabbit.jpg';

function App() {
  // Determine which component to render based on window.location.pathname
  let Component;
  switch (window.location.pathname) {
    case '/':
      Component = Home;
      break;
    case '/pricing':
      Component = Pricing;
      break;
      case '/Products':
        Component = Product;
        break;
    case '/about':
      Component = About;
      break;
      case '/Register':
      Component = Register;
      break;
      case '/Login':
      Component = Login;
      break;
      default:
        Component = Home;
  }
      
    
        // const renderFooter = Component === Login;

        return (
          <div className="App app-background">
            <Navbar />
            <Component />
        
            <Footer/>
            {/* {renderFooter && <Footer />} */}
          </div>
        );
      }
      
      export default App;