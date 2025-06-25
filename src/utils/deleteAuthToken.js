export default function getAuthToken() {
    return localStorage.removeItem('auth-token');
}