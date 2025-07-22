import { useEffect, useState } from 'react';
import './ProductsDetail.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';
const API = 'https://6861308b8e74864084452e8a.mockapi.io';

export default function ProductsDetail() {
  const { addToCart } = useCart();
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  useEffect(() => {
    axios.get(`${API}/products/${id}`).then((response) => {
      console.log(response);
      setProduct(response.data);
    });
  }, []);

  return (
    <>
      <div className="products-container">
        <div className="product-container">
          <img className="product-image" src={product?.image} alt="" />
          <div className="product-info">
            <h2 className="product-title">{product?.title}</h2>
            <p>{product?.description}</p>
            <span className="product-price">{product?.price}</span>
            <button className="product-button" onClick={() => addToCart(product)}>
              Comprar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
