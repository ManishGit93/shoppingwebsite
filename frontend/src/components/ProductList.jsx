import React, { useState, useEffect } from "react";
import axios from "axios";

const ProductList = () => {
  const [products, setProduct] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCat, setSelectedCat] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);

  //fetching the product list from API:

  const getProduct = async (selectedCat, selectedPrice) => {
    const res = await axios.get("https://dummyjson.com/products");
    const resapi = await res.data.products;
    const category = await res.data.products;
    const allCatData = [...new Set(category.map((item) => item.category))];
    const filterCatData = await res.data.products.filter((item) => item.category == selectedCat);
    const filterPriceData = await res.data.products.filter((item) =>item.price <= selectedPrice?.split('-')[1]);
     
    setProduct(resapi);
    setCategories(allCatData);
    if (selectedCat || selectedPrice) {
      setProduct([...filterCatData, ...filterPriceData]);
    }
  };
  useEffect(() => {
    getProduct(selectedCat, selectedPrice);
  }, [selectedCat, selectedPrice]);

  console.log("Selecte Price", selectedPrice?.split("-")[1]);

  return (
    <div className="container mx-auto px-4 py-8 font-oswald">
      <div className="flex items-center justify-between w-full my-2">
        <h2 className="text-2xl font-bold text-center mb-2">Our Products</h2>
        <div className="text-sm font-bold text-center mb-2">
          <div className="flex flex-col md:flex-row justify-between items-center mb-4 gap-2">
            <div className="mb-4 md:mb-0">
              <select
                value={selectedCat}
                onChange={(e) => setSelectedCat(e.target.value)}
                className="mt-2 border rounded-lg px-3 py-2"
              >
                <option value="">All Categories</option>
                {categories.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <select
                value={selectedPrice}
                onChange={(e) => setSelectedPrice(e.target.value)}
                className="mt-2 border rounded-lg px-3 py-2"
              >
                <option value="">All Prices</option>
                <option value="0-50">Under $50</option>
                <option value="51-100">$51 - $100</option>
                <option value="101-200">$101 - $200</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={product.thumbnail} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{product.title}</h3>
              <p className="text-gray-600 font-sm">{product.description.substring(0, 50)}</p>
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
