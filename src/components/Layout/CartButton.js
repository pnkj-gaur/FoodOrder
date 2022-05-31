import classes from './CartButton.module.css';

const CartButton = () => {
    return (
        <button className={classes.button}>
            <span className={classes.icon}>
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>3</span>
        </button>
    );
}
export default CartButton;