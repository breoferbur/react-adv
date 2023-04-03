import { createContext, CSSProperties } from 'react';
import { useProduct } from '../hooks/useProduct';
import { InitialValues, OnChangeArgs, Product, ProductCardHandlers, ProductContextProps } from '../interfaces/interfaces';
import styles from '../styles/styles.module.css';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
    children: (args: ProductCardHandlers) => JSX.Element;
    className?: string;
    product: Product;
    style?: CSSProperties;
    value?: number;
    initialValues?: InitialValues;
    onChange?: (args: OnChangeArgs) => void;
};

export const ProductCard = ({ product, className, style, value, initialValues, children, onChange, }: Props) => {

    const { counter, maxCount, isMaxCountReached, increaseBy, reset } = useProduct({ product, value, initialValues, onChange });

    return (
        <Provider value={{
            counter,
            product,
            maxCount,
            increaseBy,
        }}>
            <div
                className={`${styles.productCard} ${className}`}
                style={style}
            >
                {
                    children({
                        count: counter,
                        maxCount: initialValues?.maxCount,
                        isMaxCountReached,
                        product,
                        increaseBy,
                        reset,
                    })
                }
            </div>
        </Provider>
    );
};