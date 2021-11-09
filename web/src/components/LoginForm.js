import React, { useContext, useState,useRef} from 'react';
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import { Password } from 'primereact/password';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Captcha } from 'primereact/captcha';
import { Toast } from 'primereact/toast';
const { detect } = require('detect-browser');



const LoginForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [verify,setVerify]=useState(false)
    const {store} = useContext(Context);
    const toast = useRef(null);
    const device=detect()
    const keyLoginHandler=(event)=>{
        if(event.key==='Enter'){
            store.login(email,password,device)
        }
    }

    const  onLog=(msg)=>{
        toast.current.show({severity:'success', summary: 'Success Message', detail:msg, life: 3000})
    }


    return (


        <div className="login-body">
            <Toast ref={toast} />
            <div className="login-panel p-field" >
                <div className="login-panel-header" >
                    <h3 className="p-field p-text-center " >Авторизация </h3>
                </div>
                <div className="login-panel-content" >
                    <div className='p-grid'>
                        <div className='p-col-12'  >
                          <span className="p-float-label" >

                            <InputText
                                className="p-field "
                                type="text"
                                name="login"
                                value={email}
                                onChange={(e)=>setEmail(e.target.value)}
                                id="email"
                                autoComplete="disabled"
                                aria-describedby="username2-help"
                                onKeyDown={keyLoginHandler}
                            />
                                <label htmlFor="in" >логин</label>
                            </span>
                        </div>
                        <div className='p-col-12'>
                          <span className="p-float-label" >
                                        <Password
                                            feedback={false}
                                            className="p-field "
                                            type="password"
                                            name="password"
                                            autoComplete="disabled"
                                            value={password}
                                            onChange={(e)=>setPassword(e.target.value)}
                                            onKeyDown={keyLoginHandler}
                                        />
                                        <label htmlFor="in">пароль</label>
                                    </span>
                        </div>
                        <div className='p-col-6'>
                            <button className='forget-btn' >
                                Забыли пароль ?
                            </button>
                        </div>
                        <div className='p-col-6' style={{textAlign: "right"}}>
                            <Button
                                label="войти "
                                className="p-field"
                                disabled={store.isLoading}
                                onClick={()=>{store.login(email,password,device);}}
                            />
                        </div>



                    </div>


                </div>

            </div>
        </div>

    );
};

export default observer(LoginForm);
