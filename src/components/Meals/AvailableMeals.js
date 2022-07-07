import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "ButterScotch-Shake",
    description: "Served--Chilled",
    price: 12.15,
  },
  {
    id: "m2",
    name: "Veg-Noodles",
    description: "With..Delicious..Vegetables",
    price: 18.99,
  },
  {
    id: "m3",
    name: "Special-Mix-Pasta",
    description: "Chicken..or..Shrimp",
    price: 15.69,
  },
  {
    id: "m4",
    name: "Barbecue-Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m5",
    name: "Indo-Fusion-Chicken-Pizaa",
    description: "Chicken-Pepperoni...and..Chicken-Tikka",
    price: 48.92,
  },
  {
    id: "m6",
    name: "Butter-Nan",
    description: "Indian-Cuisine",
    price: 2.65,
  },
  {
    id: "m7",
    name: "Paneer-Do-Pyaza",
    description: "Creamy-Curry..",
    price: 56.5,
  },
  {
    id: "m8",
    name: "Chicken-Masala",
    description: "Roasted Chicken Chunks",
    price: 73.26,
  },
  {
    id: "m9",
    name: "Kadhai-Panner",
    description: "Punjabi-Delicacy",
    price: 51.3,
  },
  {
    id: "m10",
    name: "Salad",
    description: "Healthy...and green...",
    price: 4.92,
  },  
];
const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id = {meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    ></MealItem>
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};
export default AvailableMeals;
