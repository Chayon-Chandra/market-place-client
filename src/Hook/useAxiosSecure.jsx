import axios from "axios"
import useAuth from "./useAuth"
import { useEffect } from "react";
import { useNavigate } from "react-router";

const instance = axios.create({
      baseURL: 'http://localhost:3000'
})

const useAxiosSecure = () => {
    const {user, signOutUser} = useAuth();
    const navigate = useNavigate()

  useEffect(() =>{
    const requestInterceptors =  instance.interceptors.request.use(config => {
        const token = user.accessToken
         if(token){
            config.headers.authorization = `Bearer ${token}`
         }
        return config;
    })
    const responseInterceptors = instance.interceptors.response.use(res => {
        return res;
    }, err => {
        const status = err.status;
        if(status === 401 || status === 403){
            signOutUser()
            .then(() => {
                navigate('/login');
            })
        }
    })
    
    return () => {
        instance.interceptors.request.eject(requestInterceptors);
        instance.interceptors.request.eject(responseInterceptors)
    }
  },[user, signOutUser, navigate])

    return instance; 
}

export default useAxiosSecure;