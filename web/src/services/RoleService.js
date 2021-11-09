import $api from "../http";


export default class RoleService {
    static async fetchRoles(){
        return $api.get('/roles')
    }

}

