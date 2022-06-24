import React from 'react';

const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: (item) => { },
    removeItem: (id) => { },
    clearCart: () => { },
    showCartF: () => { },
    hideCartF: () => { },
    showCart:false
});

export default CartContext;