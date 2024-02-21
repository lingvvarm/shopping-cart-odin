import { createContext } from 'react';

export interface CartContextType {
    push: (item: { id: number; quantity: number }) => void;
}

export const CartContext = createContext<CartContextType | Array<object>>([]);
