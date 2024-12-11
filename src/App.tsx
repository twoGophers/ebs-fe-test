import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';

// components
import Catalog from '../components/catalog/Catalog';
import Cart from '../components/cart/Cart';
import Product from '../components/product/Product';

function App() {
  return (
    <div style={{ textAlign: 'center' }} className="text-3xl font-bold underline text-amber-300">
      <h1>Welcome to the Front-End Developer Test !</h1>
      <p>We wish you the best of luck. Please make sure to read the README file for
        instructions.</p>
        
        <Router>
        <div>
          <Routes>
            <Route path="/" element={<Catalog />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product" element={<Product />} />
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App
