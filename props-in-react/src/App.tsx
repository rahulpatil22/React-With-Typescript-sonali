import React from 'react';
import logo from './logo.svg';
import './App.css';
import Employee from './components/Employee';
import Products from './components/Products';



function App() {

  let emp_name="Rahul Patil";
  let designation= "Software engg";
  let marital_status =true;

  // let product = {
  //   product_name: "Laptop",
  //   brand: "HP",
  //   price: 88000
  // }

  let products=[
    {
      product_name:"Laptop",
      brand:"HP",
      price:89000
    },
    {
      product_name:"Fridge",
      brand:"IFB",
      price:89000
    },
    {
      product_name:"AC",
      brand:"LG",
      price:89000
    },
  ]

  return (
    <div className="App">
      <label>Customer Name:</label>
      <input type="text" name='cust_name' />
      {/* Link employee component */}
      <Employee name={emp_name} designation={designation} age={25} marital_status={marital_status} feedback={"Average"}/>

      <hr />
      Product Details : 
      <Products product={products}/>

    </div>
  );
}

export default App;
