import React from 'react';

// Product data with placeholders for images
const products = [
  {
    id: 1,
    name: 'Product 1',
    description: 'Description for Product 1',
    price: 19.99,
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'Description for Product 2',
    price: 24.99,
  },
  {
    id: 3,
    name: 'Product 3',
    description: 'Description for Product 3',
    price: 14.99,
  },
  {
    id: 1,
    name: 'Product 1',
    description: 'Description for Product 1',
    price: 19.99,
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'Description for Product 2',
    price: 24.99,
  },
  {
    id: 3,
    name: 'Product 3',
    description: 'Description for Product 3',
    price: 14.99,
  },
  // ... additional products
];

// Function to generate random image URLs
const generateRandomImageUrl = (id) => `https://picsum.photos/id/${id}/200/200`;

// Product Card component
const ProductCard = ({ product }) => (
  <div key={product.id} className="border rounded p-4 mb-4">
    <img src={generateRandomImageUrl(product.id)} alt={product.name} className="mb-2" />
    <h2 className="text-lg font-semibold">{product.name}</h2>
    <p className="text-gray-600">{product.description}</p>
    <p className="text-green-600 font-semibold">${product.price}</p>
  </div>
);

// Home component with Product List
export default function Home() {
  return (
    <div className='px-4 py-12 max-w-2xl mx-auto'>
      
      {/* Product List */}
      <h2 className="text-2xl font-bold mb-4 text-slate-800">Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
