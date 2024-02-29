import './Assets/products'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './Components/Cart';
import Home from './Components/Home';
import Shop from './Components/Shop';
import Productdetails from './Components/Productdetails';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/Cart' element={<Cart />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/Shop/:id" element={<Productdetails />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;