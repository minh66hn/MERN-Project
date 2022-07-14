import { createContext, useReducer } from "react";
import axios from "axios";
import { authReducer } from "../reducer/authReducer";
import {apiURL} from './constants'
export const AuthContext = createContext();

const AuthContextProvider = ({children}){
    const [authState,dispatch] = useReducer(authReducer,{
        authLoading:true,
        isAuthenticated:false,
        user:null
    });
    const loginUser = async userForm=>{
        try{
            const reponse = await axios.post(`${apiURL}`)
        }
    }
}