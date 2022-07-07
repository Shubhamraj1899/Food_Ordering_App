import  { useState} from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header"
import Meals from "./components/Meals/Meals";
import ErrorModal from "./components/UI/ErrorModal";
import CartProvider from "./store/CartProvider";

function App() {

  const [cartIsShown, setCartIsShown] = useState(false);
  const[errorIsShown, setErrorIsShown] = useState(false);
  const showCartHandler = () =>{
        setCartIsShown(true);
  }

  const hideCartHandler = () => {
     setCartIsShown(false);
  }
  const showError = () =>{
      setErrorIsShown(true);
      setCartIsShown(false);
  }
   const hideError = () =>{
      setErrorIsShown(false);
   }
  return (
    <CartProvider>
    {errorIsShown && <ErrorModal onHide = {hideError}></ErrorModal>}
    {cartIsShown && <Cart onClose={hideCartHandler} onError = {showError}></Cart>}
   <Header  onShowCart={showCartHandler}>
   </Header>
   <main>
   <Meals></Meals>
   </main>
   </CartProvider>
  );
}

export default App;
