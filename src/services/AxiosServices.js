import axios from "axios";


export default class AxiosService {

    async  getData(lastUrl) {
        return axios.get(`${lastUrl}`, { 
          headers: {
          'Content-Type': 'application/json',
        },})
        .then( response => {
          return response.data
        })    
       }

    async  getDataBody(lastUrl, data) {
        return axios.get(`${process.env.NEXT_PUBLIC_URLAPI}/${lastUrl}`, {
          headers: {
          'Content-Type': 'application/json',
        }, data})
        .then( response => {
          return response.data
        })
    }

    async  createData(lastUrl, data) {
        return axios.post(`${process.env.NEXT_PUBLIC_URLAPI}${lastUrl}`, data, { 
          headers: {
          'Content-Type': 'application/json',
        },})
        .then( response => {
          return response.data
        })    
       }

    async  updateData(lastUrl, id , data) {
        return axios.put(`${process.env.NEXT_PUBLIC_URLAPI}${lastUrl}/${id}`, data, { 
          headers: {
          'Content-Type': 'application/json',
        },})
        .then( response => response.data)    
       }

    async  updateDataBody(lastUrl, data) {
        return axios.put(`${process.env.NEXT_PUBLIC_URLAPI}${lastUrl}`, data, { 
          headers: {
          'Content-Type': 'application/json',
        },})
        .then( response => {
          return response.data
        })    
       }
    
}
