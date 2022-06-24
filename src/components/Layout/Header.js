import { Fragment, useContext } from "react";
import CartButton from "./CartButton";
import classes from './Header.module.css';
import CartContext from '../../store/cart-context';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store/auth/auth-reducer";

const Header = (props) => {
    const cartCtx = useContext(CartContext);
    const isAuth=useSelector(store=>store.auth.isAuthenticated);
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const onLogOut=()=>{
        dispatch(authActions.logout());
        navigate('/',{replace:true});
    }
    const onShowCart = () => {
        cartCtx.showCartF();
    }
    return (
        <Fragment>
            <header className={classes.header}>
                <h2>Meal Order</h2>
                <div className={classes.nav}>
                    { isAuth && <p onClick={onLogOut}>Log Out</p>}
                    { isAuth && <Link to="/LogIn" className={classes.disable}>Profile</Link>}
                    { isAuth && <CartButton onShow={onShowCart} />}
                </div>
            </header>
        </Fragment>
    );
};
export default Header;