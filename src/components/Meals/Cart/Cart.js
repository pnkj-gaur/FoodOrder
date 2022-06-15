import classes from './Cart.module.css';
import Modal from '../../UI/Modal';
import CartItem from './CartItem';
import { useContext } from 'react';
import CartContext from '../../../store/cart-context';

const Cart = (props) => {

    const cartCtx = useContext(CartContext);

    const onAdd = (item) => {
        cartCtx.addItem({ ...item, amount: 1 });
    }
    const onRemove = (id) => {
        cartCtx.removeItem(id);
    }

    let totalAmount = Math.abs(cartCtx.totalAmount.toFixed(2));
    const cartitems = cartCtx.items.map((item) => (
        <CartItem key={item.id} item={item}
            onAdd={onAdd.bind(null, item)}
            onRemove={onRemove.bind(null, item.id)} />
    ));
    const emptyMsg = <div className={classes.emptyMsq}><h4><i>No item selected!</i></h4></div>;

    return (
        <Modal onHide={props.onHideCart}>
            <ul className={classes.cart__items}>
                {cartCtx.items.length > 0 && cartitems}
                {!cartCtx.items.length > 0 && emptyMsg}
            </ul>
            <div className={classes.total}>
                <span>Total Amount</span>
                <span><span style={{ fontStyle: "italic" }}>Rs</span> <span className={classes.price__span}>{totalAmount}</span></span>
            </div>
            <div className={classes.actions}>
                {cartCtx.items.length > 0 && <button className={classes['button--alt']} onClick={props.onHideCart}>Close</button>}
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    );
}

export default Cart;