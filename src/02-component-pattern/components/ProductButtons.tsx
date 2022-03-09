import { useContext } from "react";
import { ProductContex } from "./ProductCard";
import styles from '../styles/styles.module.css'

//export const ProductButtons = ({increaseBy, counter=0}:ProductButtonsProps) => {
//AS we are implemeting the context we dont need the props


export const ProductButtons = () => {
    
    const {increaseBy, counter} = useContext(ProductContex);
    
    return(
        <div className={styles.buttonsContainer}>
            <button
                className={styles.buttonMinus}
                onClick={ () => increaseBy(-1) }
            >-</button>
            <div className={styles.countLabel}>{counter}</div>
            <button 
                className={styles.buttonAdd}
                onClick={ () => increaseBy(+1) }
            >+</button>
        </div>
    )
}