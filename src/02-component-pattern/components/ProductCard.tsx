import { createContext, ReactElement, CSSProperties } from 'react';
import { useProducts } from '../hooks/useProducts';
import styles from '../styles/styles.module.css';
import { Product, ProductContextProps } from '../interfaces/interfaces';


export const ProductContex = createContext({} as ProductContextProps)

const { Provider } = ProductContex;


export interface Props {
  product: Product;
  children?: ReactElement | ReactElement[]
  className?: string;
  style?: CSSProperties
}

export const ProductCard = ({children, product, className, style}: Props) => {

  const {counter, increaseBy} = useProducts()

  return (
    <Provider value={{
        counter,
        increaseBy,
        product
    }}>
        <div 
          className={ `${styles.productCard} ${ className }` } 
          style={style}
        >
            {children}
        </div>
    </Provider>
  )
}


