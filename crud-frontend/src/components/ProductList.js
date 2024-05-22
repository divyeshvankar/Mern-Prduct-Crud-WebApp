// src/components/ProductList.js
import React, { useEffect, useState } from 'react';
import { getProducts, deleteProduct } from '../ProductService';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const response = await getProducts();
    setProducts(response.data);
  };

  const handleDelete = async (id) => {
    await deleteProduct(id);
    fetchProducts();
  };

  return (
    <div>
      <h1>Product List</h1>
      <Link to="/create">Add Product</Link>
      <ul>
        {products.map(product => (
          <li key={product._id}>
            <Link to={`/edit/${product._id}`}>{product.name}</Link>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <p>Quantity: {product.quantity}</p>
            {product.file && (
              <div>
                <p>File:</p>
                <a href={`http://localhost:3001/${product.file}`} target="_blank" rel="noopener noreferrer">View File</a>
              </div>
            )}
            <button onClick={() => handleDelete(product._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
