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
      <div className="mb-4 d-flex justify-content-center">
        <div className="col-12 col-md-6">
          <input
            type="search"
            className="form-control rounded-pill shadow-sm px-4 py-2"
            placeholder="Buscar..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

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