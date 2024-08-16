import { API_ENDPOINTS } from '../utils/api/endpoint'
import http from '../utils/api/http';

export const fetchUsers = async (params) => {
    try {
        
        const {data} = await http.get(API_ENDPOINTS.GET_ALL_USER,{params});                
        return data
        
    } catch (error) {
        console.log(error);
        
    }
}

export const createUser=async(input)=>{
    try {
        const data=await http.post(API_ENDPOINTS.CREATE_USER,input);
        return data
        
    } catch (error) {
        
    }
}

export const getUser=async(id)=>{
    try {
        const data=await http.get(`${API_ENDPOINTS.USER_DETAIL}/${id}`);
        return data?.data
        
    } catch (error) {
        console.log(error);
        
        // throw  new Error(error)
    }
}
export const updateUser=async(id,formData)=>{
    try {
        const data=await http.post(`${API_ENDPOINTS.UPDATE_USER}/${id}`,formData);
        console.log(data);
        
        return data
        
    } catch (error) {
        throw  new Error(error)
    }
}
