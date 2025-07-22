import { useId } from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useCart } from '../../hooks/useCart';
import axios from 'axios';
const API = import.meta.env.VITE_API_URL;

export default function Cart() {
  const cartCheckboxId = useId();
  const { cart, clearCart } = useCart();
  const total = cart.reduce((acc, product) => {
    const priceNumber = Number(product.price.replace(/\$|\./g, '').trim());
    return acc + priceNumber * product.quantity;
  }, 0);

  async function sendOrder() {
    if (cart.length === 0) {
      alert('No hay productos en el carrito');
      return;
    }

    const order = {
      products: cart.map((product) => ({
        id: product.id,
        title: product.title,
        price: Number(product.price.replace(/\$|\./g, '').trim()),
        quantity: product.quantity,
      })),
      total,
    };

    try {
      console.log('Enviando orden:', order);

      await axios.post(`${API}/orders`, order).then(() => {
        alert('Orden enviada correctamente');
        clearCart();
      });
    } catch (error) {
      console.log('Error al enviar la orden', error);
      alert('Error al enviar la orden');
    }
  }

  return (
    <>
      <label className="cart-button" htmlFor={cartCheckboxId}>
        <FontAwesomeIcon icon={faCartShopping} className="cart-icon" />
      </label>
      <input type="checkbox" hidden id={cartCheckboxId} />

      <aside className="cart">
        <h1 className="cart-h1">Mi Carrito</h1>
        <hr id="hr-cart" />
        <ul>
          {cart.map((product) => (
            <li key={product.id}>
              <div className="cart-container">
                <img className="cart-img" src={product.image} alt="" />
                <div className="cart-description">
                  <span>
                    {product.title} x{product.quantity}
                  </span>
                  <span>{product.price}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <strong className="total">Total: ${total.toLocaleString('es-AR')}</strong>

        <button onClick={clearCart}>Eliminar todos los productos</button>
        <button className="order-btn" onClick={sendOrder}>
          Enviar orden
        </button>
      </aside>
    </>
  );
}
