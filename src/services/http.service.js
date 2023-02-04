import axios from 'axios'

// const BASE_URL = `http://localhost:80/api/`
const BASE_URL = `http://164.92.245.54:80/api/`


export const httpService = {
    get(endpoint, data) {
        return ajax(endpoint, 'GET', data)
    },
    async post(endpoint, data) {
        const URL = `${BASE_URL}${endpoint}`
        data = JSON.stringify(data)
        const res = await axios.post(URL, { data })
        return res.data
    },
    put(endpoint, data) {
        return ajax(endpoint, 'PUT', data)
    },
    delete(endpoint, data) {
        return ajax(endpoint, 'DELETE', data)
    }
}

async function ajax(endpoint, method = 'GET', data = null) {
    try {
        data = JSON.stringify(data)
        const res = await axios({
            url: `${BASE_URL}${endpoint}`,
            method,
            data: JSON.stringify('Matan'),
            params: (method === 'GET') ? data : null
        })
        return res.data
    } catch (err) {
        console.log(`Had Issues ${method}ing to the backend, endpoint: ${endpoint}, with data: ${data}`)
        console.dir(err)
        if (err.response && err.response.status === 401) {
            sessionStorage.clear()
            if (method === 'GET') window.location.assign('/')
        }
        throw err
    }
}

// async function ajax(endpoint, method = 'GET', data = null) {
//     try {
//         data = JSON.stringify(data)
//         const res = await axios({
//             url: `${BASE_URL}${endpoint}`,
//             method,
//             data: 'Matan',
//             params: (method === 'GET') ? data : null
//         })
//         return res.data
//     } catch (err) {
//         console.log(`Had Issues ${method}ing to the backend, endpoint: ${endpoint}, with data: ${data}`)
//         console.dir(err)
//         if (err.response && err.response.status === 401) {
//             sessionStorage.clear()
//             if (method === 'GET') window.location.assign('/')
//         }
//         throw err
//     }
// }