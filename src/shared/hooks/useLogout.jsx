export const useLogout = () => {
    console.log('Estoy cerrando la sesión')
    localStorage.removeItem('user')
    window.location.href = '/channels'    
}
