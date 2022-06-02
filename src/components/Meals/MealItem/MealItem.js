import classes from './MealItem.module.css';
const MealsItem = (props) => {
    return (
        <li className={classes.meal__item}>
            <div>
                <h3>{props.meal.name}</h3>
                <div className={classes.meal__desc}>{props.meal.description}</div>
                <div className={classes.meal__price}>{props.meal.price}</div>
            </div>
        </li>
    );
}
export default MealsItem;