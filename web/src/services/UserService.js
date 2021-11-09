import $api from "../http";


export default class UserService {
    static async fetchUsers(){
    return $api.get('/users')
    }
    static async createUsers(user){
        return $api.post('/users', user)
    }
    static async updateUsers(user){
        return $api.put('/users',user)
    }
    static async deleteUsers(id){
        return $api.delete(`/users/${id}`)
    }
}

