const apiConfig = {
    baseURI: process.env.REACT_APP_API_BASE_URI,
    apiEndPoints: {
        auth: {
            login: '/users/signin'
        }
    }
}

export default apiConfig

