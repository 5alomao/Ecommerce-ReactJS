import React, { createContext, ReactNode, useState } from "react";
import allProducts from "../components/assets/all_product";

// Defina a interface para um produto
export interface ProductType {
  id: number;
  name: string;
  category: string;
  image: string;
  new_price: number;
  old_price: number;
}

// Defina o tipo do contexto
interface ShopContextType {
  allProducts: ProductType[];
  cartItems: { [key: number]: number };
  addToCart: (itemId: number) => void;
  removeFromCart: (itemId: number) => void;
  getTotalCartAmount: () => number;
  getTotalCartItems: () => number;
}
// Crie o contexto com o tipo inicial vazio
export const ShopContext = createContext<ShopContextType | undefined>(
  undefined
);

interface ShopContextProviderProps {
  children: ReactNode;
}

const getDefaultCart = (): { [key: number]: number } => {
  let cart: { [key: number]: number } = {};
  allProducts.forEach((product) => {
    cart[product.id] = 0;
  });
  return cart;
};

export const ShopContextProvider: React.FC<ShopContextProviderProps> = ({
  children,
}) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId: number) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }));
  };

  const removeFromCart = (itemId: number): void => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: Math.max((prev[itemId] || 0) - 1, 0),
    }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = allProducts.find((product) => {
          return product.id === Number(item);
        })!;
        totalAmount += itemInfo.new_price * cartItems[item];
      }
    }
    return totalAmount;
  };

  const getTotalCartItems = () => {
    let totalItems = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItems += cartItems[item];
      }
    }
    return totalItems;
  };

  const contextValue = {
    allProducts,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    getTotalCartItems,
  };
  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
};
