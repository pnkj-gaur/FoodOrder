import { Fragment, useContext, useEffect, useState } from "react";
import CartButton from "./CartButton";
import classes from './Header.module.css';
import CartContext from '../../store/cart-context';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store/auth/auth-reducer";

const scrollY = window.scrollY || document.documentElement.scrollTop;
const scrollX = window.scrollY || document.documentElement.scrollWidth;

const Header = (props) => {
    const location = useLocation();
    const cartCtx = useContext(CartContext);
    const isAuth = useSelector(store => store.auth.isAuthenticated);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [scrollDimensions, setScrollDimensions] = useState({ scrollY, scrollX });
    const [mouseDimensions, setmouseDimensions] = useState(400);

    const deriveScrollDimensions = () => {
        const scrollY = window.scrollY || document.documentElement.scrollTop
        const scrollX = window.scrollY || document.documentElement.scrollWidth

        setScrollDimensions({ scrollY, scrollX })
    }
    const deriveMouseDimensions = (e) => {
        setmouseDimensions(e.screenY);
    }

    useEffect(() => {
        deriveScrollDimensions()
        window.addEventListener('scroll', deriveScrollDimensions)
        return () => {
            window.removeEventListener('resize', deriveScrollDimensions);
        }
    }, []);
    useEffect(() => {
        window.addEventListener('mousemove', deriveMouseDimensions)

        return () => {
            window.removeEventListener('resize', deriveMouseDimensions)
        }
    }, []);

    const onLogOut = () => {
        dispatch(authActions.logout());
        navigate('/', { replace: true });
    }
    const onShowCart = () => {
        cartCtx.showCartF();
    }
    return (
        <Fragment>
            <header className={`${classes.header} ${(location.pathname === "/LogIn" ||
                scrollDimensions.scrollY >= 433) ? classes.header_dark : ""} ${(scrollDimensions.scrollX >= 720 &&
                    scrollDimensions.scrollY >= 433 && mouseDimensions > 200) || (scrollDimensions.scrollX < 720 &&
                        scrollDimensions.scrollY >= 110) ? classes.header_hide : ""}`}>
                <h2>Meal Order</h2>
                <div className={classes.nav}>
                    {isAuth && <p onClick={onLogOut}>Log Out</p>}
                    {isAuth && <Link to="/LogIn" className={classes.disable}>Profile</Link>}
                    {isAuth && <CartButton onShow={onShowCart} />}
                </div>
            </header>
        </Fragment>
    );
};
export default Header;