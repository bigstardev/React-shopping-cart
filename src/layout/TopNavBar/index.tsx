import React, {FC, useState, useContext} from 'react';
import clsx from 'clsx';

import Drawer from '@material-ui/core/Drawer';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Badge from '@material-ui/core/Badge';
import {Button, IconButton} from '@material-ui/core';
import {CartItemContext, ContextProps} from 'context/CartItemContext';

import {NavItem} from 'components';
import TopNavLogo from './TopNavLogo';
import TopNavBarSearch from './TopNavBarSearch';
import Cart from 'layout/Cart';
import {Product} from 'types/product';

import './TopNavBar.scss';

const TopNavBar: FC = () => {
  //mobile friendly, but not used this time
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState<boolean>(false);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const {cartItems} = useContext(CartItemContext) as ContextProps;

  // For cart Badge
  const getTotalCartItems = (items: Product[]) => items.reduce((ack: number, item) => ack + item.amount, 0);

  return (
    <>
      <div className={clsx('TopNav__wrapper', {'TopNav__wrapper--mobile-menu-open': mobileMenuIsOpen})}>
        <header className="TopNav">
          <div className="TopNav__left">
            <TopNavLogo />
            <TopNavBarSearch />
          </div>

          <div className="TopNav__right">
            <Button>Get $20 Off</Button>
            <NavItem url="/">Shop</NavItem>
            <NavItem url="/recipes">Recipes</NavItem>
            <NavItem url="/settings">Settings</NavItem>
          </div>
        </header>
      </div>
      <Drawer anchor="right" open={isCartOpen} onClose={() => setIsCartOpen(false)}>
        <Cart />
      </Drawer>
      <div className="CartIcon">
        <IconButton onClick={() => setIsCartOpen(true)}>
          <Badge badgeContent={getTotalCartItems(cartItems)} color="error">
            <AddShoppingCartIcon />
          </Badge>
        </IconButton>
      </div>
    </>
  );
};
export default TopNavBar;
