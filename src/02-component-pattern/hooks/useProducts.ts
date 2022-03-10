import { useEffect, useState } from "react"
import { Product, onChangeArgs } from '../interfaces/interfaces';


interface useProductArgs {
    product: Product;
    onChange?: (args: onChangeArgs) => void;
    value?: number;
}

export const useProducts = ( { onChange, product, value = 0 }: useProductArgs ) => {
    const [counter, setCounter] = useState(value);
    //!!onChange is it is true because if we write !onChange will be false

    
   
    const increaseBy = (value: number) => {

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