import React from 'react';

export default function ProductCard({ key, product }) {
  return (
    <article className="card">
      <div className="card-header">
        <img className="card-image" src={product.image} alt="" />
      </div>
      <div className="card-body">
        <div className="card-title">{product.title}</div>
        <div className="card-storage">
          <button>128 GB</button>
          <button>256 GB</button>
        </div>
        <div className="card-price">{product.price}</div>
        <div className="card-buy">
          <button>Agregar al carrito</button>
        </div>
      </div>
    </article>
  );
}
