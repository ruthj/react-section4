import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components/';
import '../styles/custom-styles.css'

import { products } from '../data/products';



const product = products[0];

export const ShoppingPage = () => {

   
  return (
    <div>  
        <h1>SHOPPING STORE</h1>
        <hr />
        <div>
            <ProductCard 
                key={product.id}
                product={product} 
                className='text-white bg-dark'
                initialValues={{
                  count:4,
                  maxCount: 10,
                }}
              >
                {
                  ( {reset, count, increaseBy, isMaxCountReached, maxCount} ) => (
                    <>
                      <ProductImage style={{ boxShadow: '10px 10px 10px rgba(0,0,0,2)'}}className='custom-imagen' />
                      <ProductTitle className=' text-bold' />
                      <ProductButtons className='custom-buttons' />
                      <button onClick={reset}>RESET</button>
                      
                      <button onClick={ () => increaseBy(-2)}>-2</button>
                      {
                        (!isMaxCountReached && <button onClick={ () => increaseBy(+2)}>+2</button>)
                      }
                      
                      <span>{count}-{maxCount}</span>

                      
                      {/* {JSON.stringify(args, null,3)} */}
                    </>
                  )
                }
            
                
            </ProductCard>
           
        </div>
       
    </div>
  )
}
