import axios from 'axios'



    export function ApiDataDummy( ){
        return axios.get("https://dummyjson.com/products");
    }

    export function SingleProduct(id){
        return axios.get('https://dummyjson.com/products/'+id)
    }