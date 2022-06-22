import { useContext, useEffect, useState } from 'react';
import CartContext from '../../store/cart-context';
import classes from './AvailableMeals.module.css';
import MealsItem from "./MealItem/MealItem";

const AvailableMeals = () => {
    const [meals,setMeals]=useState([]);
    const cartCtx = useContext(CartContext);
    const onSubmit = (item) => {
        cartCtx.addItem(item);
    };
    useEffect(() => {
        const fetchMeals = async () => {
            const res = await fetch("https://defoodde-default-rtdb.firebaseio.com/meals.json");
            if (!res.ok) {
                throw new Error("Something went wrong!");
            }
            const responseData = await res.json();
            let availableMeals = [];
            for (const key in responseData) {
                availableMeals.push({
                    id: key,
                    name: responseData[key].name,
                    description: responseData[key].description,
                    price: responseData[key].price,
                });
            }
            setMeals(availableMeals);

        }
        fetchMeals().catch(err=>{
            console.log(err);
        });
    }, []);

    const mealsList = meals.map((item, i) => {
        return <MealsItem key={i} meal={item} submitHandler={onSubmit} />
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