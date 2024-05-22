// src/components/ProductForm.js
import React, { useState, useEffect } from 'react';
import { createProduct, getProductById, updateProduct } from '../ProductService';
import { useNavigate, useParams } from 'react-router-dom';

const ProductForm = () => {
  const [product, setProduct] = useState({
    name: '',
    quantity: '',
    price: '',
    description: '',
    file: null
  });
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      fetchProduct(id);
    }
  }, [id]);

  const fetchProduct = async (id) => {
    const response = await getProductById(id);
    setProduct(response.data);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleFileChange = (e) => {
    setProduct({ ...product, file: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (const key in product) {
      formData.append(key, product[key]);
    }

    if (id) {
      await updateProduct(id, formData);
    } else {
      await createProduct(formData);
    }
    navigate('/');
  };

  return (
    <div>
      <h1>{id ? 'Edit Product' : 'Create Product'}</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={product.name} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Quantity:
          <input type="number" name="quantity" value={product.quantity} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Price:
          <input type="number" name="price" value={product.price} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Description:
          <textarea name="description" value={product.description} onChange={handleChange} />
        </label>
        <br />
        <label>
          File:
          <input type="file" name="file" onChange={handleFileChange} />
        </label>
        <br />
        <button type="submit">{id ? 'Update' : 'Create'}</button>
      </form>
    </div>
  );
};

export default ProductForm;
