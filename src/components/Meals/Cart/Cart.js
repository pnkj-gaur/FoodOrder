import classes from './Cart.module.css';
import Modal from '../../UI/Modal';
import CartItem from './CartItem';
import React, { useContext, useState } from 'react';
import CartContext from '../../../store/cart-context';
import Checkout from './Checkout';

const Cart = (props) => {
    const [isCheckout, setIsCheckout] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [didSubmit, setDidSubmit] = useState(false);
    const cartCtx = useContext(CartContext);

    const onAdd = (item) => {
        cartCtx.addItem({ ...item, amount: 1 });
    }
    const onRemove = (id) => {
        cartCtx.removeItem(id);
    }
    const orderHandler = () => {
        setIsCheckout(true);
    };
    const onCloseCart=()=>{
        cartCtx.hideCartF();
    }

    const submitOrderHandler = async (userData) => {
        setIsSubmitting(true);
        await fetch('https://defoodde-default-rtdb.firebaseio.com/orders.json', {
            method: 'POST',
            body: JSON.stringify({
                user: userData,
                orderedItems: cartCtx.items,
            }),
        });
        setIsSubmitting(false);
        setDidSubmit(true);
        cartCtx.clearCart();
    };

    let totalAmount = Math.abs(cartCtx.totalAmount.toFixed(2));
//Cart Meal data
    const cartitems = cartCtx.items.map((item) => (
        <CartItem key={item.id} item={item}
            onAdd={onAdd.bind(null, item)}
            onRemove={onRemove.bind(null, item.id)} />
    ));
    const emptyMsg = <div className={classes.emptyMsq}><h4><i>No item selected!</i></h4></div>;

//Modal Actions
    const modalActions = (
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={onCloseCart}>Close</button>
            {cartCtx.items.length > 0 && <button className={classes.button} onClick={orderHandler} >Order</button>}
        </div>
    );

//Cart Items
    const cartModalContent = (
        <React.Fragment>
            <ul className={classes.cart__items}>
                {cartCtx.items.length > 0 && cartitems}
                {!cartCtx.items.length > 0 && emptyMsg}
            </ul>
            <div className={classes.total}>
                <span>Total Amount</span>
                <span><span style={{ fontStyle: "italic" }}>Rs</span> <span className={classes.price__span}>{totalAmount}</span></span>
            </div>
            {isCheckout && (
                <Checkout onConfirm={submitOrderHandler} onCancel={onCloseCart} />
            )}
            {!isCheckout && modalActions}
        </React.Fragment>
    );

    const isSubmittingModalContent = <p>Sending order data...</p>;

    const didSubmitModalContent = (
        <React.Fragment>
            <p>Successfully sent the order!</p>
            <div className={classes.actions}>
                <button className={classes.button} onClick={onCloseCart}>
                    Close
                </button>
            </div>
        </React.Fragment>
    );

    return (
        <Modal onHide={cartCtx.hideCartF}>
            {!isSubmitting && !didSubmit && cartModalContent}
            {isSubmitting && isSubmittingModalContent}
            {!isSubmitting && didSubmit && didSubmitModalContent}
        </Modal>
    );
}

export default Cart;