import { useEffect, useState } from 'react';
import './SectionProducts.css';
import axios from 'axios';
import ProductCard from '../ProductCard/ProductCard';

export default function SectionProducts() {
  const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   getProducts();
  // }, []);

  // const getProducts = async () => {
  //   try {
  //     const response = console.log(response);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <main className="main-container">
      <section className="main-products">
        <h2>PRODUCTOS DESTACADOS</h2>
        <div className="cards-container">
          {products.map((product) => {
            <ProductCard product={product} key={product.id} />;
          })}
        </div>
      </section>
    </main>
  );
}
