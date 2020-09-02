export default function isAuthenticated(){
    return localStorage.getItem('x-auth-token') && localStorage.getItem('x-auth-token-expiration') > Date.now()
    }