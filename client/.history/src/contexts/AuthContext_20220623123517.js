import { createContext, useReducer } from "react";
import axios from "axios";

export const AuthContext = createContext();

const AuthContextProvider = ({children}){
    const [authState,dispatch] = useRe
}