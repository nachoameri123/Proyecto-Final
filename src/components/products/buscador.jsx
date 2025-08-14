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
      <div className="d-flex flex-column flex-md-row flex-wrap gap-3 p-3">

        {filteredItems.length > 0 ? (

          filteredItems.map((product) => (
            < ProductCard params={product} key={product.id} />
          )
          )

        ) : (
          <li className="text-gray-500">No hay resultados.</li>
        )}
      </div>

    </div>
  );
};