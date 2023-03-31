import { Product } from './../interfaces/interfaces';
import { useEffect, useRef, useState } from 'react';
import { OnChangeArgs } from '../interfaces/interfaces';

interface useProductArgs {
    product: Product;
    value?: number;
    onChange?: (args: OnChangeArgs) => void
}

export const useProduct = ({ product, value = 0, onChange }: useProductArgs) => {
    const [counter, setCounter] = useState(value);

    const isControlled = useRef(!!onChange);

    // Sincroniza el valor del contador de producto -> carrito
    useEffect(() => {
      setCounter(value);
    }, [value]);
    

    const increaseBy = (value: number) => {
        if (isControlled.current) {
            return onChange!({product, count: value});
        }
        const newValue = Math.max(counter + value, 0);
        setCounter(newValue);
        onChange && onChange({ product, count: newValue });
    };

    return {
        counter,
        increaseBy,
    };
};

