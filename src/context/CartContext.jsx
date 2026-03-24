import { createContext, useReducer, useContext } from "react";

const CartContext = createContext();

const initialState = {
    items: []
};

function cartReducer(state, action) {
    const existing = state.items.find(item => item.id === action.payload.id);
    switch (action.type) {
        case "ADD_TO_CART":
            if (existing) {
                return {
                    ...state,
                    items: state.items.map(item => 
                        item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
                    )
                };
            };
            return {
                ...state,
                items: [...state.items, { ...action.payload, quantity: 1 }]
            };
        default:
            return state;
    };
};

export function CartProvider({ children }) {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);