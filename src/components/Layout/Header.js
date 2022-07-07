
import React from "react";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import mealsImage from "../../assets/meals.jpg";
const Header = (props) => {
    return <React.Fragment>
        <header className= {classes.header}>
            <h1>ReactMeals</h1>
           <HeaderCartButton onClick={props.onShowCart}></HeaderCartButton>
        </header>
        <div className = {classes["main-image"]}>
            <img src = {mealsImage} alt = "A table full of delicious food!" ></img>
        </div>
    </React.Fragment>
};

export default Header;