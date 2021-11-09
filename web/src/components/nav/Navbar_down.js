import React, { useContext, useState,useRef} from 'react';
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import '../../styles/burger.scss'
import { Password } from 'primereact/password';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Captcha } from 'primereact/captcha';
import { Toast } from 'primereact/toast';
import classes from '../../styles/NavBar.module.css'
import Navigation from "./Navgation";
import MobileNavigation from "./MobileNavigation";
import {Link} from "react-router-dom";
import {set} from "mobx";


const NavBar = () => {
    const {store} = useContext(Context);
    const [clicked,setClicked]=useState(false)
    const links=[
        {
            path:'/map',
            name:'map'
        },
        {
            path:'/dashboard/users',
            name:'users'
        },
        {
            path:'/dashboard/terminals',
            name:'terminals'
        }
    ]
    const handleClick=()=>{
        setClicked(!clicked)
    }

    return (
        // <div className="p-d-flex p-jc-between">
        //     <Button label="тут может быть ваша реклама" className="p-button-raised p-button-secondary p-button-text" />
        //     <Button label="Logout" className="p-button-raised p-button-danger" onClick={()=>store.logout()} />
        // </div>



        <nav className="NavbarItems">

            <div className='menu-icon' onClick={handleClick}>
                <i className={clicked?'fas fa-times':'fas fa-bars'}></i>
            </div>
            <ul className={clicked?'nav-menu active':'nav-menu'}>
                {links.map((item,index)=>{
                    return(
                        <li key={index}>
                            <Link className='nav-links' to={item.path}>{item.name}</Link>
                        </li>
                    )
                })}
            </ul>
        </nav>




    );
};

export default observer(NavBar);
