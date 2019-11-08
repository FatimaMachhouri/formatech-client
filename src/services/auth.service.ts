const logout = () => {
 // remove user from local storage to log user out
 localStorage.removeItem('tokenFormatech');
}

export { logout };