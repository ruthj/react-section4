import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components/';
import '../styles/custom-styles.css'
const product = {
    id: '1',
    title: 'COFFEE RUTH',
    img: './coffee-mug.png'
}

export const ShoppingPage = () => {
  return (
    <div>  
        <h1>SHOPPING STORE</h1>
        <hr />
        <div style={{
            display:'flex',
            flexDirection:'row',
            flexWrap: 'wrap'

        }}>
            <ProductCard 
                className='text-white bg-dark'
                product={product} 
            >
                <ProductCard.Image className='custom-imagen'  />
                <ProductCard.Title className=' text-bold'title={'REFACTOR .. cafe aqui'} />
                <ProductCard.Buttons  className='custom-buttons' />
            </ProductCard>

            <ProductCard 
                product={product} 
                className='text-white bg-dark'
            >
                <ProductImage style={{ boxShadow: '10px 10px 10px rgba(0,0,0,2)'}}className='custom-imagen' />
                <ProductTitle className=' text-bold' />
                <ProductButtons className='custom-buttons' />
            </ProductCard>
           
            <ProductCard 
                product={product} 
                style={{backgroundColor:'#70D1F8'}}
            >
                <ProductImage style={{
                    boxShadow: '10px 10px 10px rgba(0,0,0,2)'
                }} />
                <ProductTitle style={{
                    fontWeight: 'bold'
                }}/>
                <ProductButtons style={{
                    display:'flex',
                    justifyContent:'end'
                }}/>
            </ProductCard>
        </div>
    </div>
  )
}
