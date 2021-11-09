import React, { useContext, useEffect,useRef, useState} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation,
    BrowserRouter
} from "react-router-dom";
import {Context} from "./index";
import {observer} from "mobx-react-lite";
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import {Test} from "./components/Test";
import LoginForm from './components/LoginForm'
import { Toast } from 'primereact/toast';
import {Button} from "primereact/button";
import Login_Page from "./components/pages/Login_Page";
import NavBar from "./components/nav/NavBar";

import {useRoutes} from './routes'




const App = () => {
    const {store} = useContext(Context);
    const routes = useRoutes(store.isAuth)
    const toast = useRef(null);

    useEffect(() => {
        // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
        let vh = window.innerHeight * 0.01;
        // Then we set the value in the --vh custom property to the root of the document
        document.documentElement.style.setProperty('--vh', `${vh}px`);

        // We listen to the resize event
        window.addEventListener('resize', () => {
            // We execute the same script as before
            let vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        });
        // if(store.isAuth){
        //     toast.current.show({severity:'success', summary: 'Success Message', detail:' Auth', life: 3000});
        // }else{
        //     toast.current.show({severity:'success', summary: 'Success Message', detail:'not Auth', life: 3000});
        // }
        // if (localStorage.getItem('token')) {
        //     store.checkAuth()
        // }
        // console.log('loading',store.isLoading)
        // console.log('auth',store.isAuth)
    }, [])

    if (store.isLoading) {
        return <div>Загрузка...</div>
    }

    if(store.isAuth){
        return(
                    <div>
                        <Router>
                        <Toast ref={toast} />
                        <div className='container'>
                            <div className="module">
                                <div className="module__item">
                                    <NavBar />
                                </div>
                                <div className="module__item2">
                                            <Switch>
                                                <Route path='/test' >
                                                    <Test />
                                                </Route>
                                                <Redirect  to="/test"  />
                                            </Switch>
                                </div>
                            </div>

                        </div>
                        </Router>
                    </div>
        )
    }else{
        return(
            <div className='login-page'>
                <Toast ref={toast} />
                    <Router>
                        <Switch>
                            <Route path='/login'    >
                                <Login_Page/>
                            </Route>
                            <Redirect  to="/login"  />
                        </Switch>
                    </Router>
            </div>
        )
    }







};

export default observer(App);
