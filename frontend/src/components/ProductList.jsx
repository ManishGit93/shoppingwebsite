import React, { useState, useEffect } from "react";
import axios from "axios";

const ProductList = () => {
  const [products, setProduct] = useState([]);

  //fetching the product list from API:
  const getProduct = async () => {
    const res = await axios.get("https://dummyjson.com/products");
    const resapi = await res.data.products;
    setProduct(resapi);
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-6">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={product.thumbnail} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{product.title}</h3>
              <p className="text-gray-600 font-sm">{product.description.substring(0,50)}</p>
              <p className="text-blue-500 font-bold mt-2">${product.price.toFixed(2)}</p>
              <button className="mt-4 w-full bg-blue-500 text-white hover:bg-blue-600 font-semibold py-2 rounded-lg">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
