const getToken = () => { return localStorage.getItem("tokenFormatech"); };

const setToken = (token: string) => { localStorage.setItem('tokenFormatech', token); };

const removeToken = () => { 
    console.log('removed')
    localStorage.removeItem('tokenFormatech'); };

export { getToken, setToken, removeToken };