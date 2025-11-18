import axios from 'axios';


const useAxiosSecure = () => {
    const axiosSecure = axios.create({
      baseURL: "http://localhost:5050",
    });
    return axiosSecure;
};

export default useAxiosSecure;