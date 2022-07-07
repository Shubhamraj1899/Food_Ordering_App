
import Card from "./Card";
import Button from "./Button";
import classes from "./ErrorModal.module.css";
import Modal from "./Modal";
function ErrorModal(props){

    return (
    <Modal>   
    <Card className={classes.modal}>
    <header className = {classes.header}>
              <h2>Ordered</h2>
    </header >
    <div className = {classes.content}>
           <p>Order will be delivered in 20 minutes😋</p> 
    </div>
    <footer className={classes.actions}>
        <Button onClick={props.onHide}>Okay</Button>
    </footer>
    </Card>
    </Modal>
    );

}
export default ErrorModal;