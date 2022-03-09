import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components/';

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
            <ProductCard product={product} >
                <ProductCard.Image />
                <ProductCard.Title title={'REFACTOR .. cafe aqui'} />
                <ProductCard.Buttons  />
            </ProductCard>

            <ProductCard product={product} >
                <ProductImage />
                <ProductTitle />
                <ProductButtons  />
            </ProductCard>
           

        </div>
    </div>
  )
}
