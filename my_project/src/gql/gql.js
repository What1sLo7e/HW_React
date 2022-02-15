// import { token } from "../pages/Signup"

const GRAPHQL_URL = 'http://hipstagram.asmer.fs.a-level.com.ua/graphql'

// const variables = {
//     login: 'testUser3@gmail.com',
//     password: 'test123',
//     }


// const headers = {
//     'Content-Type': 'application/json',
// }
// if (localStorage.getItem("token")) {
//     headers.Authorization = `Bearer ${token}`
// }

// 'Authorization': `Bearer  + ${token}`
// Authorization: token ? `Bearer ` + token : {},

let token = localStorage.getItem('token') 

const gql = (query, variables = {}, headers = {}) => {
    return fetch(GRAPHQL_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // 'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ query, variables})
    })
    .then(res => res.json())
}

export { gql }

