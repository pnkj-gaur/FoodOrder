import { Fragment, useContext } from "react";
import AvailableMeals from "./AvailableMeals";
import Cart from "./Cart/Cart";
import MealSummary from "./MealSummary";
import CartContext from '../../store/cart-context';
import classes from '../Layout/Header.module.css';
import img from '../../assets/food-img.jpg'

const Meals=()=>{
    const cartCtx=useContext(CartContext);
    return(
        <Fragment>
            {cartCtx.showCart && <Cart/>}
            <div className={classes.image}>
                <div className={classes.img__div}>
                    <img src={img} alt="food"></img>
                </div>
            </div>
            <MealSummary/>
            <AvailableMeals/>
        </Fragment>
    );
}
export default Meals;