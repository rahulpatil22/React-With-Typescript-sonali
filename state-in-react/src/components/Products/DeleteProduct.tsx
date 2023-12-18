import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ProductService } from '../../services/ProductService';

function DeleteProduct() {
    let Navigate = useNavigate ()
  let params= useParams<{id:string}>()
  let pid=params.id;
  let product_id:number | undefined=pid?parseInt(pid):undefined

  useEffect(()=>{
    ProductService.deleteProductDetails(product_id)
    .then(response=>{
        Navigate("/")
    })
    .catch(error=>{
        console.log(error)
    })
  })

  return (
    <div>DeleteProduct
        
    </div>
  )
}

export default DeleteProduct