import apiClient from '@/libs/apiClient';
import deleteAuthToken from '@/utils/deleteAuthToken';
import getAuthToken from '@/utils/getAuthToken';

export async function validateAuthToken() {
    try {
        const response = await apiClient.get('/user');
        return response.data;
    }
    catch(error) {
        if(error.response?.status == 401) {
            deleteAuthToken();
        }
        return null;
    }
}

export function isAuthenticated() {
    return !!getAuthToken();
}