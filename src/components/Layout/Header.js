import { Fragment } from "react";
import CartButton from "./CartButton";
import classes from './Header.module.css';
import img from '../../assets/food-img.jpg'

const Header=()=>{
    return(
        <Fragment>
            <header className={classes.header}>
                <h2>Meal Order</h2>
                <CartButton/>
            </header>
            <div className={classes.image}>
                <img src={img} alt="food"></img>
            </div>
        </Fragment>
    );
};
export default Header;