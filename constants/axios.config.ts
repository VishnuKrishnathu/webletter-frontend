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

export const authAxios = axios.create({
    baseURL: `${BASE_ENDPOINT}/auth`,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json'
    },
    withCredentials: true
})