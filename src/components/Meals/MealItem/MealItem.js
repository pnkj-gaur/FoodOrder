import { Fragment, useState } from 'react';
import AlertBox from '../../UI/AlertBox';
import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';

const MealsItem = (props) => {
    const [itemAdded, setItemAdded] = useState(false);
    const [qty, setQty] = useState(0);
    const onSubmit = (Qty) => {
        let item = {
            id: props.meal.id,
            name: props.meal.name,
            amount: Qty,
            description: props.meal.description,
            price: props.meal.price
        };
        props.submitHandler(item);
        setQty(Qty);
        setItemAdded(true);
    };

    const onHideAlert=()=>{
        setItemAdded(false);
    }
    return (
        <Fragment>
            {itemAdded && <AlertBox onHide={onHideAlert}>
                <div className={classes.alertBox}>
                    <div className={classes.alert__message}>
                        <p><span>{props.meal.name}</span> added to your cart.</p>
                        <p>Quantity : <span>{qty}</span></p>
                    </div>
                    <div className={classes.alert__action}>
                        {<button className={classes['button--alt']} onClick={onHideAlert}>Close</button>}
                    </div>
                </div>
            </AlertBox>}
            <li className={classes.meal__item}>
                <div>
                    <h3>{props.meal.name}</h3>
                    <div className={classes.meal__desc}>{props.meal.description}</div>
                    <div className={classes.meal__price}>{props.meal.price}</div>
                </div>
                <div>
                    <MealItemForm onSubmit={onSubmit} />
                </div>
            </li>
        </Fragment>
    );
}
export default MealsItem;