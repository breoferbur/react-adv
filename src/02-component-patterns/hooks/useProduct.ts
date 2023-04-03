import { Product, InitialValues } from './../interfaces/interfaces';
import { useEffect, useState, useRef } from 'react';
import { OnChangeArgs } from '../interfaces/interfaces';

interface useProductArgs {
    product: Product;
    value?: number;
    initialValues?: InitialValues;
    onChange?: (args: OnChangeArgs) => void
}

export const useProduct = ({ product, value = 0, initialValues, onChange }: useProductArgs) => {

    const [counter, setCounter] = useState<number>(initialValues?.count || value);
    const isMounted = useRef(false);

    // Sincroniza el valor del contador de producto -> carrito
    useEffect(() => {
        if (!isMounted.current) return;
        setCounter(value);
    }, [value]);

    useEffect(() => {
        isMounted.current = true;
    }, []);

    const increaseBy = (value: number) => {
        let newValue = Math.max(counter + value, 0);
        if (initialValues?.maxCount) {
            newValue = Math.min(newValue, initialValues.maxCount);
        };
        setCounter(newValue);
        onChange && onChange({ product, count: newValue });
    };
    
    const reset = () =>  {
        setCounter(initialValues?.count || value);
    }

    return {
        counter,
        maxCount: initialValues?.maxCount,
        isMaxCountReached: !!initialValues?.maxCount && counter === initialValues.maxCount,
        increaseBy,
        reset,
    };
};

