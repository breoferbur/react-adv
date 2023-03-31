import { createContext, CSSProperties, ReactElement } from 'react';
import { useProduct } from '../hooks/useProduct';
import { OnChangeArgs, Product, ProductContextProps } from '../interfaces/interfaces';
import styles from '../styles/styles.module.css';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
    children?: ReactElement | ReactElement[];
    className?: string;
    product: Product;
    style?: CSSProperties;
    value?: number;
    onChange?: (args: OnChangeArgs) => void;
};

export const ProductCard = ({ product, className, style, value, children, onChange, }: Props) => {

    const { counter, increaseBy } = useProduct({ product, value, onChange });

    return (
        <Provider value={{
            counter,
            increaseBy,
            product,
        }}>
            <div
                className={`${styles.productCard} ${className}`}
                style={style}
            >
                {children}
            </div>
        </Provider>
    );
};