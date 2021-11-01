import {FC, ReactNode} from 'react';
import TopNavBar from './TopNavBar';
import './Layout.scss';

interface Props {
  children: ReactNode;
}
const Layout: FC<Props> = ({children}) => {
  return (
    <div className="Layout">
      <div className="Layout__top-nav-wrapper">
        <TopNavBar />
      </div>
      <div className="Layout__content">{children}</div>
    </div>
  );
};
export default Layout;
