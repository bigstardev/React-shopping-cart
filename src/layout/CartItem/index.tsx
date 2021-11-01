import {FC} from 'react';

import Button from '@material-ui/core/Button';
import {Typography} from '@material-ui/core';

import {Product} from 'types/product';

import './CartItem.scss';

interface Props {
  item: Product;
  addToCart: (clickedItem: Product) => void;
  removeFromCart: (id: string) => void;
}

const CartItem: FC<Props> = ({item, addToCart, removeFromCart}) => {
  return (
    <div className="CartItem">
      <div>
        <Typography variant="h6" gutterBottom={true}>
          {item.name}
        </Typography>
        <div className="information">
          <Typography variant="subtitle1" gutterBottom={true}>
            Price: ${item.price / item.stepSize}
          </Typography>
          <Typography variant="subtitle1">Total: ${((item.amount * item.price) / 100).toFixed(2)}</Typography>
        </div>
        <div className="buttons">
          <Button
            size="small"
            disableElevation
            variant="contained"
            onClick={() => removeFromCart(item.productId.value)}
          >
            -
          </Button>
          <p>{item.amount}</p>
          <Button size="small" disableElevation variant="contained" onClick={() => addToCart(item)}>
            +
          </Button>
        </div>
      </div>
      <img src={item.imageUrl} alt={item.name} />
    </div>
  );
};
export default CartItem;
