import { CSSProperties, useContext } from "react";
import { ProductContex } from "./ProductCard";
import styles from '../styles/styles.module.css'


export interface Props {
     title?: string; 
     className?: string ;
     isActiveClass?: string;
     style?: CSSProperties
}

export const ProductTitle = ({  className, title, style } :Props) => {
    
    const {product} = useContext(ProductContex);

    return (
        <span 
            className={ `${styles.productDescription} ${className}`}
            style={style}
        >
            { title ? title : product.title }
        </span>
    )
}