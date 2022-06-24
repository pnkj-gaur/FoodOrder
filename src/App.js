import './App.css';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';
import { Navigate, Route, Routes } from 'react-router-dom';
import LogIn from './components/Auth/Auth';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from './store/auth/auth-reducer';

const calculateRemainingTime = (expirationTime) => {
  const currentTime = new Date().getTime();
  const adjExpirationTime = new Date(expirationTime).getTime();

  const remainingDuration = adjExpirationTime - currentTime;

  return remainingDuration;
};
const retrieveStoredToken = () => {
  const storedToken = localStorage.getItem('token');
  const storedExpirationDate = localStorage.getItem('expirationTime');

  const remainingTime = calculateRemainingTime(storedExpirationDate);

  if (remainingTime <= 3600) {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationTime');
    return null;
  }

  return {
    token: storedToken,
    expTime: storedExpirationDate,
  };
};

function App() {
  const tokenData = retrieveStoredToken();
  const dispatch = useDispatch();
  if (tokenData) {
    dispatch(authActions.login({ token: tokenData.token, expTime: tokenData.expTime }));
  }
  const isAuth = useSelector(state => state.auth.isAuthenticated);
  return (
    <CartProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate replace to='/Meals' />} />
        {isAuth && <Route path="/Meals" element={<Meals />} />}
        <Route path="/LogIn" element={<LogIn />} />
        <Route path="*" element={<Navigate replace to='/LogIn' />} />
      </Routes>
    </CartProvider>
  );
}

export default App;
