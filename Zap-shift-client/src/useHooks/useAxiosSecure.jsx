/* import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5050",
});
const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  useEffect(() => {
     if (user?.accessToken) {
    const requestInterceptor = axiosSecure.interceptors.request.use(
      (config) => {
        config.headers.authorization = `Bearer ${user?.accessToken}`;
        return config;
      }
    );
    const responseInterceptor = axiosSecure.interceptors.response.use(
      (res) => {
        return res;
      },
      (error) => {
        const statusCode = error.status;
        console.log("axiossecure",error)
        if (statusCode === 401 || statusCode === 403) {
          alert("forbidden user dectected");
          logout().then(() => {
            navigate("/login");
          
          });
        }
         console.log("special Axios", error);
       return Promise.reject(error); 
      }
    );

    return () => {
      axios.interceptors.request.eject(requestInterceptor);
      axios.interceptors.response.eject(responseInterceptor);
    };

  }
  }, [logout, navigate,user?.accessToken]);
  return axiosSecure;
};

export default useAxiosSecure;
 */
import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5050",
});

const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  useEffect(() => {
    // only add interceptor when token exists
    if (!user?.accessToken) return;

    const requestInterceptor = axiosSecure.interceptors.request.use(
      (config) => {
        config.headers.Authorization = `Bearer ${user.accessToken}`;
        return config;
      }
    );

    const responseInterceptor = axiosSecure.interceptors.response.use(
      (res) => res,
      async (error) => {
        const statusCode = error?.status;

        if (statusCode === 401 || statusCode === 403) {
          alert("Forbidden user detected");

          await logout();
          navigate("/login");
        }

        console.log("Axios Secure Error:", error);
        return Promise.reject(error);
      }
    );

    return () => {
      axiosSecure.interceptors.request.eject(requestInterceptor);
      axiosSecure.interceptors.response.eject(responseInterceptor);
    };
  }, [user?.accessToken, logout, navigate]);

  return axiosSecure;
};

export default useAxiosSecure;
