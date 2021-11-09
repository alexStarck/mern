import $api from "../http";


export default class TerminalService {
    static async getTerminals() {
        return $api.get('/terminals' )
    }
    static async createTerminals(data) {
        return $api.post('/terminals',data)
    }
    static async updateTerminal(data){
        return $api.put('/terminals',data)
    }
    static async deleteTerminal(id) {
        return $api.delete(`/terminals/${id}`)
    }

}
