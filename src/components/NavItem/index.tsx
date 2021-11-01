import {FC} from 'react';
import {Link} from 'react-router-dom';

import {Typography} from '@material-ui/core';

import './NavItem.scss';

interface Props {
  children: string;
  url: string;
}

const NavItem: FC<Props> = ({children, url}) => {
  return (
    <Link to={url} className="NavItem">
      <Typography variant="subtitle1">{children}</Typography>
    </Link>
  );
};
export default NavItem;
