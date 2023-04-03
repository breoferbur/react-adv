import { Props as ProductButtonsProps } from '../components/ProductButtons';
import { Props as ProductCardProps } from '../components/ProductCard';
import { Props as ProductImageProps } from '../components/ProductImage';
import { Props as ProductTitleProps } from '../components/ProductTitle';

export interface ProductCardHOCProps {
    ({ product, className, children }: ProductCardProps): JSX.Element,
    Title: (Props: ProductTitleProps) => JSX.Element,
    Image: (Props: ProductImageProps) => JSX.Element,
    Buttons: (Props: ProductButtonsProps) => JSX.Element
}

export interface Product {
    id: string;
    title: string;
    img?: string;
};

export interface ProductInCart extends Product {
    count: number;
};

export interface ProductContextProps {
    counter: number;
    product: Product;
    maxCount?: number;
    increaseBy: (value: number) => void;
};

export interface OnChangeArgs {
    product: Product;
    count: number;
};

export interface InitialValues {
    count?: number;
    maxCount?: number;
};

export interface ProductCardHandlers {
    count: number;
    maxCount?: number;
    isMaxCountReached: boolean;
    product: Product;

    increaseBy: (value:number) => void;
    reset: () => void;
}