import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import Login_Page from "./components/pages/Login_Page";
import {Test} from "./components/Test";


export const useRoutes = (isAuthenticated) => {

    if (isAuthenticated ) {
        return (
            <Switch>
                <Route path='/main' >
                    <Test />
                </Route>
                <Redirect  to="/map"  />
            </Switch>
        )
    }else{
        return (
            <Switch>
                <Route path='/login'    >
                    <Login_Page/>
                </Route>
                <Redirect  to="/login"  />
            </Switch>
        )
    }




}
