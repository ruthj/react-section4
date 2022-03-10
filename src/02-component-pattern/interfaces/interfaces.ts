import { Props as ProductButtonProps } from "../components/ProductButtons";
import { Props as ProductCardProps } from "../components/ProductCard";
import { Props as ProductImageProps } from "../components/ProductImage";
import { Props as ProductTitleProps} from "../components/ProductTitle";
import { ReactElement } from "react";



export interface Product {
    id: string;
    title: string;
    img?: string;
}

export interface ProductContextProps {
    counter:number;
    increaseBy: (value: number) => void;
    product: Product;
}

//Below interface is for ShoppingComponent 
//  <ProductCard.Image className='custom-imagen'  />
//  <ProductCard.Title className=' text-bold'title={'REFACTOR .. cafe aqui'} />
//  <ProductCard.Buttons  className='custom-buttons' />
export interface ProductCardHOCProps{
    ({ children, product }: ProductCardProps) : JSX.Element,
    Buttons: ( Props: ProductButtonProps ) => JSX.Element;
    Image:   ( Props:ProductImageProps )   => JSX.Element;
    Title:   ( Props:ProductTitleProps )   => JSX.Element;
}


export interface onChangeArgs {
    product: Product;
    count: number
}

export interface ProductInCart extends Product {
    count: number;
}