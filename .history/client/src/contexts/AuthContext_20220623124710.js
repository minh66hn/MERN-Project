import { createContext, useReducer } from "react";
import axios from "axios";
import { authReducer } from "../reducer/authReducer";
import {apiURL,LOCAL_STORAGE_TOKEN_NAME} from './constants'
export const AuthContext = createContext();

const AuthContextProvider = ({children}){
    const [authState,dispatch] = useReducer(authReducer,{
        authLoading:true,
        isAuthenticated:false,
        user:null
    });
    const loginUser = async userForm=>{
        try{
            const reponse = await axios.post(`${apiURL}/auth/login`)
            if (reponse.data.success)
            localStorage.setItem(LOCAL_STORAGE_TOKEN_NAME,respose.data.accessToken)
        
            
        }
        catch(error){
            
        }
    }
}