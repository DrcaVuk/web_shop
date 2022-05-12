import { createContext } from "react";

export const AuthContext = createContext({
    isLoggedIn: false,
    user_id: null,
    token: null,
    role: null,
    login: () => {},
    logout: () => {},
    bag: [],
    subtotal: 0,
    total: 0,
    inBag: 0,
    getBagId: () => {},
    addItem: () => {},
    removeItem: () => {},
    getItems: () => {},
    updateItem: () => {}
});