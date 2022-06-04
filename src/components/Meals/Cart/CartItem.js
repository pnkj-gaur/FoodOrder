import classes from './CartItem.module.css';

const CartItem = (props) => {
    return (
        <li className={classes.cart__item}>
            <div>
                <h2>{props.item.name}</h2>
                <div className={classes.summary}>
                    <span className={classes.price}>Rs {props.item.price}</span>
                    <span className={classes.amount}>x {props.item.amount}</span>
                </div>
            </div>
            <div className={classes.actions}>
                <button >-</button>
                <button >+</button>
            </div>
        </li>
    );
}

export default CartItem;