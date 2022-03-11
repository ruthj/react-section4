import { useEffect, useRef, useState } from "react"
import { Product, onChangeArgs, InitialValues } from '../interfaces/interfaces';


interface useProductArgs {
    product: Product;
    onChange?: (args: onChangeArgs) => void;
    value?: number;
    initialValues?: InitialValues
}

export const useProducts = ( { onChange, product, value = 0, initialValues }: useProductArgs ) => {
    
    const [counter, setCounter] = useState<number>(initialValues?.count || value  );
    //!!onChange is it is true because if we write !onChange will be false

    const isMounted = useRef(false);
    
   
    const increaseBy = (value: number, ) => {
      
        let newValue = Math.max( counter + value, 0 ) ;
      

        if(initialValues?.maxCount! > 0){
           // console.log('soy mayor que 0 el MAX COUNT',initialValues?.maxCount);
           // newValue = (initialValues?.maxCount)
           newValue = Math.min(newValue, initialValues?.maxCount!)
            
        }
           
        setCounter( newValue )
        
        //console.log('newValue',newValue);

        // below code is the same as an if(onChage)
        onChange && onChange({ count: newValue, product });
    }
    
    const reset = () => {
        setCounter(initialValues?.count || value)
    }

    useEffect(() => {
        if ( !isMounted.current ) return;
        setCounter(value)
    }, [value])

    useEffect(() => {
        isMounted.current = true
      
    }, [])

    return{
        counter,
        isMaxCountReached: !!initialValues?.count && initialValues.maxCount === counter,
        maxCount: initialValues?.maxCount,

        increaseBy,
        reset,
    }
}