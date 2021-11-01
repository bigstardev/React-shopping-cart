import {FC} from 'react';
import {CircularProgress} from '@material-ui/core';
import Wrapper from './Loading.style';

const Loading: FC = () => {
  return (
    <Wrapper>
      <CircularProgress />
    </Wrapper>
  );
};
export default Loading;
