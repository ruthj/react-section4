import { CSSProperties, useContext } from "react";
import { ProductContex } from "./ProductCard";
import noImage from '../assets/no-image.jpg'
import styles from '../styles/styles.module.css'


export interface Props {
    img?: string;
    className?: string
    style?: CSSProperties
}

export const ProductImage = ({ className, img, style  }:Props) => {

    const {product} = useContext(ProductContex);

    let imgToShow: string;
    if (img) {
        imgToShow = img;
    } else if (product.img){
        imgToShow = product.img
    }else {
        imgToShow = noImage;
    }

    return (
        <img 
            className={ `${styles.productImg} ${className}` }
            src={imgToShow}
            alt="product-image" 
            style={style}
        />
    )
}



