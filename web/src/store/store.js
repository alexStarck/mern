
import {makeAutoObservable} from "mobx";
import AuthService from "../services/AuthService";
import axios from 'axios';
import {API_URL} from "../http";
import { detect } from 'detect-browser'
export default class Store {
    user = {};
    isAuth = false;
    isLoading = false;
    role='';

    constructor() {
        if (localStorage.getItem('token')) {
            this.checkAuth();
        }
        makeAutoObservable(this);
    }

    setRole(role) {
        this.role = role;
    }

    setAuth(bool) {
        this.isAuth = bool;
    }

    setUser(user) {
        this.user = user;
    }


    setLoading(bool) {
        this.isLoading = bool;
    }

    async login(username, password,device) {
        try {
            console.log(1)
            console.log(device)
            const response = await AuthService.login(username, password,device);
            // console.log(response)
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            this.setRole(response.data.user.role)
            this.setUser(response.data.user);
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }

    async registration(email, password) {
        try {
            const response = await AuthService.registration(email, password);
            console.log(response)
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user);
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }

    async logout() {
        try {
            const response = await AuthService.logout();
            localStorage.removeItem('token');
            this.setAuth(false);
            this.setUser({});
            this.setRole('');
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }





    async checkAdmin() {
        this.setLoading(true);
        try {
            const response = await axios.get(`${API_URL}/admin`, {withCredentials: true})
            console.log(response);
            this.setAdmin(true);
        } catch (e) {
            console.log(e.response?.data?.message);
        } finally {
            this.setLoading(false);
        }
    }


    async checkAuth() {
        this.setLoading(true);
        try {
            const device=detect()
            const response = await axios.post(`${API_URL}/refresh`,{device: device}, {withCredentials: true})
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user);
        } catch (e) {
            console.log(e.response?.data?.message);
        } finally {
            this.setLoading(false);
        }
    }
}
