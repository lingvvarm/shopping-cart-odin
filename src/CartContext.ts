import { createContext } from 'react';

export interface CartType {
    id: number;
    quantity: number;
}

export const CartContext = createContext<Array<CartType>>([]);
