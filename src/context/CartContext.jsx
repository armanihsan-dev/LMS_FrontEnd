import { createContext, useContext, useMemo, useState } from 'react';

const CartContext = createContext(undefined);

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const addToCart = async (course) => {
    setCart((prevCart) => {
      const existingCourse = prevCart.find((item) => item.name === course.name);

      if (existingCourse) {
        return prevCart.map((item) =>
          item.name === course.name
            ? { ...item, qty: (item.qty || 1) + 1 }
            : item
        );
      }

      return [...prevCart, { ...course, qty: 1 }];
    });
  };

  const removeFromCart = (course) => {
    setCart((prevCart) => prevCart.filter((item) => item.name !== course.name));
  };

  const cartCount = useMemo(() => {
    return cart.reduce((total, item) => total + (item.qty || 1), 0);
  }, [cart]);

  return (
    <CartContext.Provider
      value={{ cart, setCart, addToCart, removeFromCart, cartCount }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
