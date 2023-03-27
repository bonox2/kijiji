import axios from "axios";

const BACK_END_API = 'http://localhost:1337/api'

const api = axios.create({
    baseURL: BACK_END_API
})


export function getCategories(url){
    return api.get(url).then(res => res.data.data)
}

export function getData(url){
    return api.get(url).then(res => res.data.data)
}
