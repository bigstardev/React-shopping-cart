import React, {FC} from 'react';
import {NavLink} from 'react-router-dom';

import Logo from 'assets/logo.png';
import './TopNavLogo.scss';

const TopNavLogo: FC = () => {
  return (
    <NavLink className="TopNavLogo" to="/">
      <img src={Logo} alt="grocery logo" className="TopNavLogo__img" />
    </NavLink>
  );
};
export default TopNavLogo;
