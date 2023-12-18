import React from 'react';
import logo from './logo.svg';
import './App.css';
import AddProducts from './components/Products/AddProducts';
import ProductDetails from './components/Products/ProductDetails';
import Nav from './components/common/Nav';

function App() {
  return (
    <div className="container">
      {/* <AddProducts/>
      <ProductDetails/> */}
      <Nav/>
    </div>
  );
}

export default App;
