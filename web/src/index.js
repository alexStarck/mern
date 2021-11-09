import React,{createContext} from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import './styles/login.scss'
import './styles/map.scss'
import './styles/dialog.scss'
import './styles/bar.scss'
import './styles/burger.scss'
import './styles/Terminals.dashboard.scss'
import App from './App';
import {Provider} from "mobx-react";
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import './styles/popup_menu.scss'
import Store from "./store/store";
import {
    BrowserRouter as Router,
} from "react-router-dom";


export const store = new Store();

export const Context = createContext({
    store,
})

ReactDOM.render(
        <React.StrictMode>
            <Provider {...store}>

                    <App />

            </Provider>
        </React.StrictMode>
  ,
  document.getElementById('root')
);

