import React, { useEffect, useState } from 'react'
import { ProductService } from '../../services/ProductService'
import { Product } from '../../modals/Product';
import { Link } from 'react-router-dom';
 
function ProductDetails() {
    const [products,setProducts]=useState<Product[]>([])
    useEffect(() => {
        ProductService.getProductsDetails().
        then(response=>{
            setProducts(response)
            // console.log("Response from Get API:",response);
        })
        .catch(error=>console.log("Error:",error))        
    }, [])
    return (
        <div>
            {
                products.map((pro)=>{
                    return <div className='product_info'>
                        <div>
                            <h3>
                                Product Name:{pro.product_name}<br></br>
                                Brand Name:{pro.brand_name}<br></br>
                                Price:{pro.price}<br></br>
                                <Link to={`/deleteproducts/${pro.id}`}>Delete</Link>
                            </h3>
                        </div>
                        <hr></hr>
                    </div>
                })
            }
        </div>
    )
}
 
export default ProductDetails