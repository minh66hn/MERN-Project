import axios from 'axios'


const setAuthToken = (token)=>{
    if(token){
        axios.defaults.headers.common['Authozization'] = `Bearer ${token}`
    }
    else{
        delete axios.defaults.headers.common['Authozization']
    }
}