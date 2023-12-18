import React from 'react';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import ProductDetails from '../Products/ProductDetails';
import AddProducts from '../Products/AddProducts';
import DeleteProduct from '../Products/DeleteProduct';
import PageNotFound from './PageNotFound';

function Nav() {
  return (
    <div>
        <h1>NavBar</h1>
       <BrowserRouter>
       <div className='navbar'>
        <Link to={'/addproducts'}>Add Product</Link>
       </div>
       <Routes>
        {/*Home Page Routes */}
        
        <Route path='/' Component={ProductDetails}></Route>
        <Route path='*' Component={PageNotFound}></Route>
        <Route path='/addproducts' Component={AddProducts}></Route>
        {/* dynamic route*/}
        <Route path='/deleteproducts/:id' Component={DeleteProduct}></Route>
       </Routes>
       </BrowserRouter> 
    </div>
  )
}

export default Nav