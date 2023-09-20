import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assests/shopping-bag.svg";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cardCount } = useContext(CartContext);
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  // console.log(cardCount + "cart");
  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <ShoppingIcon />
      <span className="item-count">{cardCount}</span>
    </div>
  );
};

export default CartIcon;
