import { createContext, ReactElement, CSSProperties } from 'react';
import { useProducts } from '../hooks/useProducts';
import styles from '../styles/styles.module.css';
import { Product, ProductContextProps, onChangeArgs, InitialValues, ProductCardHandlers } from '../interfaces/interfaces';
import { JsxElement } from 'typescript';
import { count } from 'console';


export const ProductContex = createContext({} as ProductContextProps)

const { Provider } = ProductContex;


export interface Props {
  product: Product;
  // we will creante the children as a function <Parent> (arguments) => (<Children></Children>) /Parent>
  // children?: ReactElement | ReactElement[];
  children:  ( args:ProductCardHandlers ) => JSX.Element;
  className?: string;
  style?: CSSProperties;
  onChange?: ( args: onChangeArgs ) => void;
  value?: number;
  initialValues?: InitialValues;
}

export const ProductCard = ({children, product, className, style, onChange, value, initialValues}: Props) => {

  const {counter, increaseBy, maxCount, isMaxCountReached, reset} 
    = useProducts({ onChange, product, value, initialValues })

  return (
    <Provider value={{
        counter,
        increaseBy,
        product,
        maxCount
    }}>
        <div 
          className={ `${styles.productCard} ${ className }` } 
          style={style}
        >   

            { children({
                count: counter,
                isMaxCountReached,
                maxCount: initialValues?.maxCount,
                product,
            
                increaseBy,
                reset,
              })
            }
            {/* {children} */}
        </div>
    </Provider>
  )
}


