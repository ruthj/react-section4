import { createContext } from 'react';
import { useProducts } from '../hooks/useProducts';
import styles from '../styles/styles.module.css';
import { ProductCardProps, ProductContextProps } from '../interfaces/interfaces';


export const ProductContex = createContext({} as ProductContextProps)

const { Provider } = ProductContex;

export const ProductCard = ({children, product}: ProductCardProps) => {

  const {counter, increaseBy} = useProducts()

  return (
    <Provider value={{
        counter,
        increaseBy,
        product
    }}>
        <div className={ styles.productCard } >
            {children}
        </div>
    </Provider>
  )
}


