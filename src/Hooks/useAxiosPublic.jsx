import axios from 'axios';

const axiosPublic = axios.create({
    baseURL: "https://dataservice.accuweather.com/locations/v1/"
})

const useAxiosPublic = () => {

    return axiosPublic;
};

export default useAxiosPublic;