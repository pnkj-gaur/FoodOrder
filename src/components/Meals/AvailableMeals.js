import classes from './AvailableMeals.module.css';
import MealsItem from "./MealItem/MealItem";

const DUMMY_MEALS = [{
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
},
{
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
},
{
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
},
{
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
},
];

const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map(item => {
        return <MealsItem meal={item} />
    });
    return (
        <section className={classes.meals}>
            <div className={classes.meals__back}>
                <div className={classes.meals__inside}>
                    <h1>Hey...We have a lot for you</h1>
                    <ul>{mealsList}</ul>
                </div>
            </div>
        </section>
    );
};
export default AvailableMeals;