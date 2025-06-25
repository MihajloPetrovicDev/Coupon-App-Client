import { isAuthenticated } from '@/services/authService';

export default function authGuard(to, _from) {
    if(isAuthenticated() && to.name != 'Login') {
        return { name: 'Login' };
    }
}