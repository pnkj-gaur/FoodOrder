import { Fragment } from "react";
import CartButton from "./CartButton";
import classes from './Header.module.css';
import img from '../../assets/food-img.jpg'

const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h2>Meal Order</h2>
                <CartButton onShow={props.onShowCart}/>
            </header>
            <div className={classes.image}>
                <div className={classes.img__div}>
                    <img src={img} alt="food"></img>
                </div>
            </div>
        </Fragment>
    );
};
export default Header;