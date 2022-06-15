import classes from './CartItem.module.css';

const CartItem = (props) => {
    return (
        <li className={classes.cart__item}>
            <div>
                <h2>{props.item.name}</h2>
                <div className={classes.summary}>
                    <span><span style={{fontStyle:"italic"}}>Rs </span><span className={classes.price}>{props.item.price}</span></span>
                    <span className={classes.amount}>x {props.item.amount}</span>
                </div>
            </div>
            <div className={classes.actions}>
                <button onClick={props.onRemove}>-</button>
                <button onClick={props.onAdd}>+</button>
            </div>
        </li>
    );
}

export default CartItem;