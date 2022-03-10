import { useEffect, useRef, useState } from "react"
import { Product, onChangeArgs } from '../interfaces/interfaces';


interface useProductArgs {
    product: Product;
    onChange?: (args: onChangeArgs) => void;
    value?: number;
}

export const useProducts = ( { onChange, product, value = 0 }: useProductArgs ) => {
    const [counter, setCounter] = useState(value);
    //!!onChange is it is true because if we write !onChange will be false
    const isControlled = useRef(!!onChange)
    
   
    const increaseBy = (value: number) => {

        if(isControlled.current){
            // if you dont wantto use onChange! add to the if(isControlled.current && onChange)
            //onChange! menas typescript trust me you will have a value there
            return onChange!({ count:value, product })
        }
        const newValue = Math.max( counter + value, 0 )
        setCounter( newValue )

        // below code is the same as an if(onChage)
        onChange && onChange({ count: newValue, product });
    }

    useEffect(() => {
        setCounter(value)
    }, [value])

    return{
        counter,
        increaseBy
    }
}