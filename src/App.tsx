import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Layout from './layout';
import {Shop, Settings, Recipes} from './pages';

import {CartContextProvider} from './context/CartItemContext';

export default function App() {
  return (
    <>
      <CartContextProvider>
        <Router>
          <Layout>
            <Switch>
              <Route exact path="/" component={Shop} />
              <Route exact path="/recipes" component={Recipes} />
              <Route exact path="/settings" component={Settings} />
            </Switch>
          </Layout>
        </Router>
      </CartContextProvider>
    </>
  );
}
