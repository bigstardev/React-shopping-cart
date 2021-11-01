import {IconButton, InputBase} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import {FC} from 'react';
import './TopNavBarSearch.scss';
const TopNavBarSearch: FC = () => {
  return (
    <div className="TopNavBarSearch">
      <InputBase />
      <IconButton>
        <SearchIcon />
      </IconButton>
    </div>
  );
};
export default TopNavBarSearch;
