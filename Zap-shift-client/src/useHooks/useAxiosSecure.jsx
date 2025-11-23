import axios from 'axios';
import { useEffect } from 'react';
import useAuth from './useAuth';
import { useNavigate } from 'react-router';

 const axiosSecure = axios.create({
   baseURL: "http://localhost:5050",
 });
const useAxiosSecure = () => {
  const navigate=useNavigate()
   const { user, logout } = useAuth();
  useEffect(()=>{
const requestInterceptor = axiosSecure.interceptors.request.use(config=>{
  config.headers.Authorization =`Bearer ${user?.accessToken}`
  return config
})
 const responseInterceptor = axiosSecure.interceptors.response.use(
   (res) => {
     return res;
   },
   (error) => {
    const statusCode=error.status
  if (statusCode ===401 || statusCode ===403) {
    alert("forbidden user dectected")
logout().then(()=>{
navigate('/login')

})
    
  }
     return Promise.reject(error);
   }
 );
 
return ()=>{
axios.interceptors.request.eject(requestInterceptor);
axios.interceptors.request.eject(responseInterceptor);
}

  },[logout, navigate, user])
    return axiosSecure;
};

export default useAxiosSecure;