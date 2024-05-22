// src/App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<ProductList />} />
        <Route path="/create" element={<ProductForm />} />
        <Route path="/edit/:id" element={<ProductForm />} />
      </Routes>
    </div>
  );
}

export default App;
