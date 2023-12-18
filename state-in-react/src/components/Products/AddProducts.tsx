// import React, { useState } from 'react'
 
// function AddProducts() {
//     const [productCount,setProductCount]=useState(10);
 
//     const handleProductCountChange=()=>{
//         console.log("In change Method");
//         setProductCount(productCount-1)
//     }
 
//   return (
//     <div>
//       Product Count:{productCount}<br></br>
//       <button onClick={handleProductCountChange}>Change Product Count</button>
//     </div>
//   )
// }
 
// export default AddProducts


// import { log } from 'console';
// import React, { ChangeEvent, FormEvent, useState } from 'react'
 
// function AddProducts() {
//   const [productName, setProductName] = useState("");
//   const [brandName, setBrandName] = useState("");
//   const [price, setPrice] = useState(0);
 
 
//   const handleProductNameChange=(e:ChangeEvent<HTMLInputElement>)=>{
//     setProductName(e.target.value)
//     // console.log(productName);    
//   }
 
//   const handleBrandNameChange=(e:ChangeEvent<HTMLInputElement>)=>{
//     setBrandName(e.target.value)
//   }
 
//   const handlePriceChange=(e:ChangeEvent<HTMLInputElement>)=>{
//       setPrice(parseInt(e.target.value))
//       //console.log(price);      
//   }
 
//   const handelSubmit=(e:FormEvent<HTMLFormElement>)=>{
//     e.preventDefault();
//     //post API
//       console.log("Product Name:",productName);
//       console.log("Brand Name:",brandName);
//       console.log("price:",price);
     
//   }
 
//   return (
//     <div className='container mt-5 border border-4 border-info'>
//       <form onSubmit={handelSubmit}>
//       <div className="mb-3">
//         <label className="form-label">Product Name</label>
//         <input
//         type="text"
//         className="form-control"
//         name='productName'
//         value={productName}
//         onChange={handleProductNameChange}
//          ></input>
//       </div>
 
//       <div className="mb-3">
//         <label className="form-label">Brand Name</label>
//         <input type="text" className="form-control"
//         name='brandName'
//         value={brandName}
//         onChange={handleBrandNameChange}
//         ></input>
//       </div>
 
//       <div className="mb-3">
//         <label className="form-label">Price</label>
//         <input type="number" className="form-control"
//         name='price'
//         value={price}
//         onChange={handlePriceChange}
 
//         ></input>
//       </div>
 
//       <div className="mb-3">
//       <button type="submit" className="btn btn-info">Add Product</button>
//       </div>
//       </form>
//     </div>
//   )
// }
 
// export default AddProducts


// HERE IS NOT MULTIPLE STATE AND MULTIPLE SETTER
// import { log } from 'console';
// import React, { ChangeEvent, FormEvent, useState } from 'react'
 
// function AddProducts() {
//   // const [productName, setProductName] = useState("");
//   // const [brandName, setBrandName] = useState("");
//   // const [price, setPrice] = useState(0);
 
//   const [product,setProduct]=useState({
//     product_name:"",
//     brand_name:"",
//     price:0
//   })
 
//   const handleProductNameChange=(e:ChangeEvent<HTMLInputElement>)=>{
//     setProduct(
//       {
//         //sprade operator(...)
//         ...product,
//         product_name:e.target.value
//       }
//     )
//     // console.log(productName);    
//   }
 
//   const handleBrandNameChange=(e:ChangeEvent<HTMLInputElement>)=>{
//     setProduct({
//       ...product,
//       brand_name:e.target.value
//     })
//   }
 
//   const handlePriceChange=(e:ChangeEvent<HTMLInputElement>)=>{
//       setProduct({
//         ...product,
//         price:parseInt(e.target.value)
//       })
//       //console.log(price);      
//   }
 
//   const handelSubmit=(e:FormEvent<HTMLFormElement>)=>{
//     e.preventDefault();
//     //post API
//       // console.log("Product Name:",productName);
//       // console.log("Brand Name:",brandName);
//       // console.log("price:",price);
//       console.log(product);
     
     
//   }
 
//   return (
//     <div className='container mt-5 border border-4 border-info'>
//       <form onSubmit={handelSubmit}>
//       <div className="mb-3">
//         <label className="form-label">Product Name</label>
//         <input
//         type="text"
//         className="form-control"
//         name='productName'
//         value={product.product_name}
//         onChange={handleProductNameChange}
//          ></input>
//       </div>
 
//       <div className="mb-3">
//         <label className="form-label">Brand Name</label>
//         <input type="text" className="form-control"
//         name='brandName'
//         value={product.brand_name}
//         onChange={handleBrandNameChange}
//         ></input>
//       </div>
 
//       <div className="mb-3">
//         <label className="form-label">Price</label>
//         <input type="number" className="form-control"
//         name='price'
//         value={product.price}
//         onChange={handlePriceChange}
 
//         ></input>
//       </div>
 
//       <div className="mb-3">
//       <button type="submit" className="btn btn-info">Add Product</button>
//       </div>
//       </form>
//     </div>
//   )
// }
 
// export default AddProducts


//HERE IS NOT MANY HANDLER AND ONCHNAGE METHOD


import axios from "axios";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { Product } from "../../modals/Product";
import { ProductService } from "../../services/ProductService";
import { useNavigate } from "react-router-dom";

// type productStateType = {
//   product_name: string;
//   brand_name: string;
//   price: number;
// };

function AddProducts() {
  const navigate= useNavigate()
  //   const [productName, setProductName] = useState("");
  //   const [brandName, setBrandName] = useState("");
  //   const [price, setPrice] = useState(0);

  const [product, setProduct] = useState<Product>(
    {} as Product
  );

  const handleProductChange = (e: ChangeEvent<HTMLInputElement>) => {
    setProduct({
      //spread operator(...)
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(product);
    ProductService.addProductDetails(product). 
    then(response=>{console.log("Resposnse:",response);
  navigate ('/')
})
    .catch(error=>console.log("Error:",error))
  };

  return (
    <div className="container mt-5 border border-4 border-info">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Product Name</label>
          <input
            type="text"
            className="form-control"
            name="product_name"
            value={product.product_name || ""}
            onChange={handleProductChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Brand Name</label>
          <input
            type="text"
            className="form-control"
            name="brand_name"
            value={product.brand_name }
            onChange={handleProductChange}

          ></input>
        </div>

        <div className="mb-3">
          <label className="form-label">Price</label>
          <input
            type="number"
            className="form-control"
            name="price"
            value={product.price }
            onChange={handleProductChange}

          ></input>
        </div>

        <div className="mb-3">
          <button type="submit" className="btn btn-info">
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddProducts;



