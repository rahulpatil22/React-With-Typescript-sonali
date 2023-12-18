import React from "react";

type product_type = {
  product: {
    product_name: string;
    brand: string;
    price: number;
  }[];
};

function Products(props: product_type) {
  console.log("Props : ", props);

  return (
    <div>
      <table className="product_info">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Brand Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {/* map */}
          {props.product.map((product_obj) => {
            return (
              <tr>
                <td>{product_obj.product_name}</td>
                <td>{product_obj.brand}</td>
                <td>{product_obj.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Products;
