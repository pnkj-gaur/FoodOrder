import { useRef, useState } from "react";
import classes from './MealItemForm.module.css';

const MealItemForm = (props) => {
    const qtyInputRef = useRef();
    const [isvalid, setIsValid] = useState();
    const onSubmit = (e) => {
        e.preventDefault();
        let qty = qtyInputRef.current.value;
        if (+qty > 0) {
            props.onSubmit(+qty);
            qtyInputRef.current.value = "1";
            setIsValid(true);
        }
        else {
            setIsValid(false);
            return;
        }
    }
    return (
        <form onSubmit={onSubmit}>
            <div className={classes.meal__form}>
                <label>Amount </label>
                <input type='number'
                    ref={qtyInputRef}
                    min='1'
                    max='5'
                    step='1'
                    defaultValue='1'
                    />
            </div>
            <div className={classes.meal__form__action}>
                <button type="submit">+ Add</button>
            </div>
            {isvalid === false && <div className={classes.error}>
                <p>* please enter valid Amount!</p>
            </div>}
        </form>
    );
}

export default MealItemForm;