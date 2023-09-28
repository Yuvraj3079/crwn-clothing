import { createContext, useEffect, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
  //find if cartItems contains productToAdd
  const existingCardItem = cartItems.find(
    (cartItems) => cartItems.id === productToAdd.id
  );
  //If found, increment quantity and return new array with modified cartItems
  if (existingCardItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  //when cartItems doesn't contain productToAdd
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, itemToRemove) => {
  //find the cart item to remove
  const existingCardItem = cartItems.find(
    (cartItems) => cartItems.id === itemToRemove.id
  );
  //check if quantity is 1. if it is remove the cart item
  if (existingCardItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== itemToRemove.id);
  }
  //return back cartitems with matching cart item with reduced quantity
  if (existingCardItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === itemToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  }
};

//to remove the item completely
const removeItemCompletely = (cartItems, itemToRemove) => {
  const existingCardItem = cartItems.find(
    (cartItems) => cartItems.id === itemToRemove.id
  );
  if (existingCardItem)
    return cartItems.filter((cartItem) => cartItem.id !== itemToRemove.id);
};
export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  cartTotal: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cardCount, setCardCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  //to get the count of items in the cart
  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCardCount(newCartCount);
  }, [cartItems]);

  //to get the total amount
  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    setCartTotal(newCartTotal);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const clearItemFromCart = (itemToRemove) => {
    setCartItems(removeItemCompletely(cartItems, itemToRemove));
  };

  const removeItemFromCart = (itemToRemove) => {
    setCartItems(removeCartItem(cartItems, itemToRemove));
  };
  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    removeItemFromCart,
    cartItems,
    cardCount,
    clearItemFromCart,
    cartTotal,
  };
  //console.log(cardCount);
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
