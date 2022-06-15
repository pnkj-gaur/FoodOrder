import './App.css';
import { useState } from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Meals/Cart/Cart';
import CartProvider from './store/CartProvider';

function App() {
  const [showCart, setShowCart] = useState(false);
  var windowOffset=0;
  const cartShowHandler = () => {
    windowOffset = window.scrollY;
    document.body.setAttribute('style', `position:fixed;top:-${windowOffset}px;left:0;right:0`);
    setShowCart(true);
  }
  const cartHideHandler = () => {
    windowOffset=document.body.style.top;
    document.body.setAttribute('style','');
    window.scrollTo(0,parseInt(windowOffset || '0') * -1);
    setShowCart(false);
  }
  return (
    <CartProvider>
      {showCart && <Cart onHideCart={cartHideHandler} />}
      <Header onShowCart={cartShowHandler} />
      <Meals />
    </CartProvider>
  );
}

export default App;
