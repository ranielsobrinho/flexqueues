import axios from 'axios'

let token = sessionStorage.getItem('token')

const Api = axios.create({
    baseURL: 'http://localhost:4000/',
    headers: {'Authorization': `Bearer ${token}`}
})

export default Api