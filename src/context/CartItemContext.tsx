import React, {useState, ReactNode, useCallback} from 'react';
import {Product} from 'types/product';

export type ContextProps = {
  cartItems: Product[];
  setCartItems: React.Dispatch<React.SetStateAction<Product[]>>;
  addProductToCart: (clickedItem: Product) => void;
  removeFromCart: (id: string) => void;
};
export const CartItemContext = React.createContext<ContextProps | null>(null);

export const CartContextProvider: React.FC<ReactNode> = ({children}) => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const addProductToCart = (clickedItem: Product) => {
    setCartItems((prevItems) => {
      // if selected product already in the cart
      const isItemInCart = prevItems.find((item) => item.productId.value === clickedItem.productId.value);
      if (isItemInCart) {
        return prevItems.map((item) =>
          item.productId.value === clickedItem.productId.value ? {...item, amount: item.amount + 1} : item,
        );
      }
      return [...prevItems, {...clickedItem, amount: 1}];
    });
  };

  const removeFromCart = (id: string) => {
    setCartItems((prev) =>
      prev.reduce((ack, item) => {
        if (item.productId.value === id) {
          if (item.amount === 1) return ack;
          return [...ack, {...item, amount: item.amount - 1}];
        } else {
          return [...ack, item];
        }
      }, [] as Product[]),
    );
  };

  return (
    <CartItemContext.Provider value={{cartItems, setCartItems, addProductToCart, removeFromCart}}>
      {children}
    </CartItemContext.Provider>
  );
};
