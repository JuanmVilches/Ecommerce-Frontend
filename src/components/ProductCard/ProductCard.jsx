import './ProductCard.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';
const API = 'https://6861308b8e74864084452e8a.mockapi.io';

export default function ProductCard() {
  const { addToCart, cart } = useCart();
  const [products, setProducts] = useState([]);

  async function getProducts() {
    try {
      const response = await axios.get(`${API}/products`);

      setProducts(response.data);
    } catch (error) {
      console.log('Error al obtener los productos', error);
    }
  }
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      {products.map((product) => (
        <article className="card" key={product.id}>
          <div className="card-header">
            <Link to={`/product/${product.id}`}>
              <img className="card-image" src={product.image} alt={product.name} />
            </Link>
          </div>
          <div className="card-body">
            <div className="card-title">{product.title}</div>
            <div className="card-storage">
              <button>128 GB</button>
              <button>256 GB</button>
            </div>
            <div className="card-price">{product.price}</div>
            <div className="card-buy">
              <button onClick={() => addToCart(product)}>Agregar al carrito</button>
            </div>
          </div>
        </article>
      ))}
    </>
  );
}
