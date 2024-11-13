import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define the type for the context state
interface CartContextType {
  cartCount: number;
  setCartCount: React.Dispatch<React.SetStateAction<number>>;
  addToCart: () => void;
  removeFromCart: () => void;
}

// Create the context
const CartContext = createContext<CartContextType | undefined>(undefined);

// Context provider component
export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartCount, setCartCount] = useState<number>(0);

  // Function to add to cart (increase cart count)
  const addToCart = () => {
    setCartCount((prevCount) => prevCount + 1);
  };

  // Function to remove from cart (decrease cart count, if greater than 0)
  const removeFromCart = () => {
    setCartCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
  };

  return (
    <CartContext.Provider value={{ cartCount, setCartCount, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the cart context
export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
