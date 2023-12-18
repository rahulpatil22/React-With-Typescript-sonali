import axios from "axios";
import { Product } from "../modals/Product";
import { promises } from "dns";
 
export class ProductService
{
    static url="http://localhost:3000/product";
    static addProductDetails(product:Product):Promise<Product>
    {
        return axios.post(this.url,product)
    }
 
    static async getProductsDetails():Promise<Product[]>
    {
       let response= await axios.get(this.url)
       return response.data as Product[]
    }
    static async deleteProductDetails(productId:number|undefined):Promise<Product>
    {
        // axios.delete(this.url+"/"+productId)
        let response=await axios.delete(`${this.url}/${productId}`)
        return response.data as Product
    }
}