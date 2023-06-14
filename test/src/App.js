import Products from './componets/Products';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"

import Navbar from './componets/Navbar';
import About from './componets/About';
import Contact from './componets/Contact';


function App() {
  let intro="Store phones typically refer to mobile phones or smartphones sold in retail stores. These stores can range from dedicated mobile phone stores to electronics retailers, department stores, or even online marketplaces. Store phones offer a wide range of options from various manufacturers and brands."
  return (
    <div className="App">
      <Router>
        <Navbar/>
          <h1>welcome in our store</h1>
          <p>{intro}</p>
      <Routes>
        <Route path="/" element={<Products/>}  />
        <Route path="/about" element={<About/>}  />
        <Route path="/contact" element={<Contact/>}  />
      </Routes>  
      </Router>
    </div>
  );
}

export default App;
