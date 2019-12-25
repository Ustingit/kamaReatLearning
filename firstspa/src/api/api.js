import Axios from 'axios';

const instance = Axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "1b95658b-9031-4f4e-a216-a8df40226f99"
    }
});

export const userAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => { return response.data })
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId) {
        return  instance.get(`profile/${userId}`)
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    }
}