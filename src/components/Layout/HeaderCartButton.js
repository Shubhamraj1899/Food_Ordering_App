import {useContext, useEffect, useState} from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css"
const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);
  const noOfCartItems = cartCtx.items.reduce((currNumber, item) => {
    return(
      currNumber + item.amount
    );
  },0);
       const {items} = cartCtx;
      const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ' '}`;
      useEffect(()=> {
        if(items.length === 0){
          return;
        }
        setBtnIsHighlighted(true);
        const timer = setTimeout(()=>{
          setBtnIsHighlighted(false);
        },300)

        return(()=> {
           clearTimeout(timer);
        })
        
      },[items]);
  return (
    <button className = {btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon></CartIcon>
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{noOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;