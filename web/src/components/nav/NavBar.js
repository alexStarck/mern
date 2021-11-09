import React, { useContext, useState,useRef} from 'react';
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import '../../styles/burger.scss'
import {Link} from "react-router-dom";
import { Sidebar } from 'primereact/sidebar';


const NavBar = () => {
    const {store} = useContext(Context);
    const [clicked,setClicked]=useState(false)
    const [visible,setVisible]=useState(false)
    const menu = useRef(null);
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
        setVisible(true)
        // setClicked(!clicked)
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
                    <li className='nav-links'  onClick={()=>store.logout()}>
                            logout
                    </li>

                </ul>
                <div className='side-top'>

                    <Sidebar visible={visible} onHide={() => setVisible(false)} position="top" style={{background:'#34495e',height:'10rem'}}  className='my-sidebar' >
                        <div className='side-content'>
                            <div className='p-grid p-align-center' >
                                <div className='p-col'>
                                    <Link className='nav-links'  to='/map'>карта</Link>
                                </div>
                                <div className='p-col'>
                                    <Link className='nav-links' to='/dashboard/users'>пользователи</Link>
                                </div>
                                <div className='p-col'>
                                    <Link className='nav-links'  to='/dashboard/terminals'>терминалы</Link>
                                </div>
                                <div className='p-col  danger' onClick={()=>store.logout()}>
                                    logout
                                </div>
                            </div>
                        </div>

                    </Sidebar>
                </div>

            </nav>







    );
};

export default observer(NavBar);
