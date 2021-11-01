import {FC, useContext} from 'react';

import {Typography} from '@material-ui/core';

import {CartItemContext, ContextProps} from 'context/CartItemContext';
import CartItem from 'layout/CartItem';
import {Product} from 'types/product';

import './Cart.scss';

const Cart: FC = () => {
  const {cartItems, addProductToCart, removeFromCart} = useContext(CartItemContext) as ContextProps;
  const calculateTotal = (items: Product[]) =>
    items.reduce((ack: number, item) => ack + (item.amount * item.price) / item.stepSize, 0);
  return (
    <div className="Cart">
      <Typography variant="h4" gutterBottom={true}>
        Your Shopping Cart
      </Typography>
      {cartItems.length === 0 ? (
        <Typography variant="h6" gutterBottom={true}>
          No items in cart.
        </Typography>
      ) : null}
      {cartItems.map((item) => (
        <CartItem key={item.productId.value} item={item} addToCart={addProductToCart} removeFromCart={removeFromCart} />
      ))}
      {cartItems.length > 0 && <h2>Total: ${calculateTotal(cartItems).toFixed(2)}</h2>}
    </div>
  );
};
export default Cart;
