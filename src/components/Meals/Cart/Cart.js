import classes from './Cart.module.css';
import Modal from '../../UI/Modal';
import CartItem from './CartItem';

const Cart = (props) => {
    const cartitems = [{ id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }].map((item) => (
        <CartItem item={item}/>
    ));
    return (
        <Modal onHide={props.onHideCart}>
            <ul className={classes.cart__items}>
                {cartitems}
            </ul>
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>Rs 35.62</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onHideCart}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    );
}

export default Cart;