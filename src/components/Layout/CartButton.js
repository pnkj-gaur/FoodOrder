import classes from './CartButton.module.css';

const CartButton = (props) => {
    const show=()=>{
        props.onShow();
    }
    return (
        <button className={classes.button} onClick={show}>
            <span className={classes.icon}>
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>3</span>
        </button>
    );
}
export default CartButton;