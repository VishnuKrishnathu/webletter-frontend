import axios from "axios";
import { useRouter } from "next/router";

const BASE_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT

export const apiAxios = axios.create({
    baseURL: `${BASE_ENDPOINT}/api`,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json'
    },
    withCredentials: true
});

apiAxios.interceptors.response.use(function(response){
    if(response.status == 403){
        let router = useRouter();
        router.push("/login");
        throw new Error("User unauthorized try logging in");
    }
    return response;
})

export const authAxios = axios.create({
    baseURL: `${BASE_ENDPOINT}/auth`,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json'
    },
    withCredentials: true
})