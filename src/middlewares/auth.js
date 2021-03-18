const setToken = (tokenData) => {
    localStorage.setItem('token', tokenData);
};

const getToken = () => {
    let tokenData = localStorage.getItem('token');

    if (tokenData) {
       return tokenData;
    }

    window.location.href = "/";
}

const clearToken = () => {
    localStorage.removeItem('token');
    window.location.href = "/";
}

const isLogged = () => {
    let tokenData = localStorage.getItem('token');

    if (tokenData) {
        return true;
    }

    return false;
};

export {isLogged, getToken, setToken, clearToken};