import React, { useContext, useState,useRef} from 'react';
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import { Password } from 'primereact/password';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Captcha } from 'primereact/captcha';
import { Toast } from 'primereact/toast';
const { detect } = require('detect-browser');


const Login_Page = () => {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [verify,setVerify]=useState(false)
    const {store} = useContext(Context);
    const toast = useRef(null);
    const device = detect();

    const keyLoginHandler=(event)=>{
        if(event.key==='Enter'){
            store.login(userName,password,device)
        }
    }

    const  onLog=(msg)=>{
        toast.current.show({severity:'success', summary: 'Success Message', detail:msg, life: 3000})
    }
    if(verify){
        return(
            <div className="card">
                <Captcha siteKey="6LczlHgbAAAAAGo1BRL4phXIqBzW5M-PsjvRlLl_" onResponse={()=>setVerify(true)} />
            </div>
        )

    }

    return (


        <div className="box">
            <Toast ref={toast} />
            <h1>Авторизация</h1>
            <input
                    type='text'
                    placeholder="Username"
                    className='sub1'
                    value={userName}
                    onChange={(e)=>setUserName(e.target.value)}
                    onKeyDown={keyLoginHandler}
            />
            <input
                    type='password'
                    placeholder="Password"
                    className='sub1'
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    onKeyDown={keyLoginHandler}
            />
            <input
                type='submit'
                name=''
                value='войти'
                className='sub2'
                onClick={()=>{store.login(userName,password,device)}} />
        </div>

    );
};

export default observer(Login_Page);
