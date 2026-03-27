import { useEffect, useReducer } from "react";
import { CartContext } from "./CartContext";

const initialState = {
    items: (() => {
        try {
            return JSON.parse(localStorage.getItem("cart")) || []
        } catch {
            return [];
        }
    })()
};

function cartReducer(state, action) {
    switch (action.type) {
        case "ADD_TO_CART": {
            const existing = state.items.find(item => item.id === action.payload.id);
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
        }
        case "REMOVE_FROM_CART": {
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload.id)
            };
        }
        case "UPDATE_QUANTITY": {
            return {
                ...state,
                items: state.items.map(item =>
                    item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item
                )
            };
        }
        default:
            return state;
    };
};

export function CartProvider({ children }) {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(state.items));
    }, [state.items]);

    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};