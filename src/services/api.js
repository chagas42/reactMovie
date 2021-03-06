import axios from 'axios'; 

const api = axios.create({
    baseURL:"https://pertobilingueadm.com.br",
}); 


export default api; 