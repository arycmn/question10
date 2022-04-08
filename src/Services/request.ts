import axios from "axios"

export const RequestRepositoriesUsers: Function = (username: string) => {
        if(!username) return 

        const promise = axios.get(`https://api.github.com/users/${username}/repos`)
        const dataPromise = promise
            .then((response) => response.data)
            .catch((err)=>{
                if (err.response.status === 404) {
                    return 'error'
                }
            })
        return dataPromise

}