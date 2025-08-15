import React, { useState } from 'react';
import { ProductCard } from './ProductCard';
export const SearchComponent = ({ products }) => {
  const [searchTerm, setSearchTerm] = useState('');

  console.log(products)

  const filteredItems = products.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4 max-w-md mx-auto">
      <input
        type="text"
        placeholder="Buscar fruta..."
        className="border px-3 py-2 w-full rounded mb-4"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="container my-4">
        <div className="row g-4">
          {filteredItems.length > 0 ? (

            filteredItems.map((product) => (
              <div className="col-sm-6 col-md-4" key={product.id}>
                < ProductCard params={product} />
              </div>)
            )

          ) : (
            <li className="text-gray-500">No hay resultados.</li>
          )}
        </div>
      </div>


    </div>


  );
};