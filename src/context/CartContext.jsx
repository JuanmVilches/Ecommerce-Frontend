import { createContext, useState } from 'react';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    const productInCartIndex = cart.findIndex((item) => item.id === product.id);
    if (productInCartIndex >= 0) {
      const newCart = structuredClone(cart);
      newCart[productInCartIndex].quantity += 1;
      return setCart(newCart);
    } else {
      setCart((prevState) => [...prevState, { ...product, quantity: 1 }]);
    }

    try {
      alert('Producto agregado al carrito');
    } catch (error) {
      alert('Error al agregar el producto al carrito');
    }
  }

  function deleteItemCart(product) {
    setCart((prevState) => prevState.filter((item) => item.id !== product.id));
  }

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        clearCart,
        addToCart,
        deleteItemCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
