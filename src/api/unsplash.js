import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: { Authorization: 'Client-ID QTo_ptBh7HKbwpjH6Js-o2jChMAbwRQBeN3zI_i77rQ' }
}) 