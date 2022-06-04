import './App.css';
import { Fragment, useState } from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Meals/Cart/Cart';

function App() {
  const [showCart, setShowCart] = useState(false);
  const cartShowHandler = () => {
    console.log("hiii");
    setShowCart(true);
  }
  const cartHideHandler = () => {
    setShowCart(false);
  }
  return (
    <Fragment>
      {showCart && <Cart onHideCart={cartHideHandler} />}
      <Header onShowCart={cartShowHandler} />
      <Meals />
    </Fragment>
  );
}

export default App;
