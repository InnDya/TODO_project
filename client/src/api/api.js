const baseURL = 'https://inna-todoapp.herokuapp.com';

const callApi = async (path, method, data = null) => {
    return fetch(baseURL + '/api/todo' + path, {
        method: method,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: data ? JSON.stringify(data) : null
    })
    .then(res => res);
}

export { callApi };