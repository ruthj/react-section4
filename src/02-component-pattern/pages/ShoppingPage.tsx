import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components/';
import '../styles/custom-styles.css'
import { useShoppingCart } from '../hooks/useShoppingCart';
import { products } from '../data/products';

export const ShoppingPage = () => {

    const {onProductCountChange, shoppingCart} = useShoppingCart();

  return (
    <div>  
        <h1>SHOPPING STORE</h1>
        <hr />
        <div style={{
            display:'flex',
            flexDirection:'row',
            flexWrap: 'wrap'

        }}>
            {
                products.map(product => (
                    <ProductCard 
                        key={product.id}
                        product={product} 
                        className='text-white bg-dark'
                        onChange={onProductCountChange}
                        value={shoppingCart[product.id]?.count || 0}
                       
                    >
                        <ProductImage style={{ boxShadow: '10px 10px 10px rgba(0,0,0,2)'}}className='custom-imagen' />
                        <ProductTitle className=' text-bold' />
                        <ProductButtons className='custom-buttons' />
                    </ProductCard>
                ))
            }
            
           
        </div>
        <div className='shopping-cart'>
            {
                //console.log('shoppingCart',{shoppingCart})
                Object.entries(shoppingCart).map(([key, product]) => (
                    <ProductCard 
                        key={key}           
                        product={product} 
                        className='text-white bg-dark'
                        style={{width:'100px'}}
                        onChange={onProductCountChange}
                        value={product.count}
                    >
                        <ProductImage 
                            style={{ 
                                boxShadow: '10px 10px 10px rgba(0,0,0,2)'
                            }}
                            className='custom-imagen' 
                        />
                        
                        <ProductButtons 
                            className='custom-buttons'
                            style={{
                                display:'flex',
                                justifyContent:'center'
                            }}
                        />
                    </ProductCard>

                ))
            }
       </div>
       
        <div>
            <code>
                {JSON.stringify(shoppingCart, null, 5)}
            </code>
        </div>
    </div>
  )
}
