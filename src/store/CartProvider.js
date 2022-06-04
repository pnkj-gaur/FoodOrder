import CartContext from './cart-context'

const CartProvider = () => {
    const addItemToCartHandler = (item) => {
        dispatchCartAction({ type: 'ADD', item: item });
    };

    const removeItemFromCartHandler = (id) => {
        dispatchCartAction({ type: 'REMOVE', id: id });
    };
    const context = {
        items: [],
        totalAmount: 0,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
    };
    return (
        <CartContext.Provider value={context}>
            {props.children}
        </CartContext.Provider>
    );
}

export default CartProvider;