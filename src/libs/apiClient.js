import axios from 'axios';
import config from '@/config'
import getAuthToken from '@/utils/getAuthToken';

const apiClient = axios.create({
    baseURL: config.apiBaseUrl,
    headers: {
        'Content-Type': 'application/json',
        'auth-token': getAuthToken(),
    },
})

export default apiClient;