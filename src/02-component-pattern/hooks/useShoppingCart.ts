import { useState } from "react";
import { Product, ProductInCart } from "../interfaces/interfaces";


export const useShoppingCart = () => {
    const [shoppingCart, setShoppingCart] = useState<{ [key:string]: ProductInCart }>({});
    
    const onProductCountChange = ({count, product}: {count: number, product: Product}) => {
        // console.log('hola mundo',count, product);

        //the second argument in useSte it is a function
        //you can use the shopingCart that sill have the current state
        // or create a new argument that will have the old state
        // funtion SHOULD MATCH { [key:string]: ProductInCart }
        setShoppingCart(oldShoppingCart => {

            const productInCart: ProductInCart = oldShoppingCart[product.id] || {...product, count:0};

            if(Math.max(productInCart.count + count, 0 ) > 0){
                productInCart.count += count;

                return{
                    ...oldShoppingCart,
                    [product.id]: productInCart
                }
            }
            const {[product.id]: toDelete, ...rest} = oldShoppingCart;
            return {...rest};
            

            // if (count == 0){
            //     // console.log('soy menor que 0',count);
            //     // desestructure oldShopping object 
            //     // toDelete {id: '1', title: 'COFFEE RUTH', img: './coffee-mug.png', count: 1}
            //     //oldShoppingCart is saving the object to delete
            //     const {[product.id]: toDelete, ...rest} = oldShoppingCart
            //     //delete ({...oldShoppingCart}) [product.id]
            //     console.log('Delete when 0 toDelete',toDelete);
            //     console.log('Delete when 0 rest',{...rest});
            //     return{
            //         ...rest
            //     }
            // }
            
            
            // return{
            //     ...oldShoppingCart,
            //     //computed  [product.id]
            //     [product.id]: {...product, count }
            // } 
        })
        
    }

    return{
        onProductCountChange,
        shoppingCart
    }
}