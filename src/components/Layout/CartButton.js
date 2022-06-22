import { useContext } from 'react';
import classes from './CartButton.module.css';
import CartContext from '../../store/cart-context';

const CartButton = (props) => {
    const ctx=useContext(CartContext);
    const show=()=>{
        props.onShow();
    }
    return (
        <button className={classes.button} onClick={show}>
            <span className={classes.icon}>
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{ctx.items.length}</span>
        </button>
    );
}
export default CartButton;