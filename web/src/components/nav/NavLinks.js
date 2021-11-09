import React, { useContext, useState,useRef} from 'react';
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import { Password } from 'primereact/password';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Captcha } from 'primereact/captcha';
import { Toast } from 'primereact/toast';
import classes from '../../styles/NavBar.module.css'


const NavLinks = () => {


    return [
        {
            link:'/map',
            name:'map'
        },
        {
            link:'/dashboard/users',
            name:'users'
        },
        {
            link:'/dashboard/terminals',
            name:'terminals'
        }
    ];
};

export default observer(NavLinks);
