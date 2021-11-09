import React, {useState, useEffect, useCallback, useContext} from "react";
// import {dialog} from "./dialog";
import {Dialog} from "primereact/dialog";
import {useHistory} from "react-router-dom";
import {Context} from "../index";
import DeviceDetector from "device-detector-js";




export const Test=()=>{
    const deviceDetector = new DeviceDetector();
    const userAgent = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.81 Safari/537.36";
    const device = deviceDetector.parse(userAgent);


// handle the case where we don't detect the browser




    return(
        <div className='Dash_test'>
                <h1>Fixed Top Menu</h1>
                <h2>Scroll this page to see the effect</h2>
                <h2>The navigation bar will stay at the top of the page while scrolling</h2>
            <button onClick={()=>console.log(device)}>
                device info
            </button>
               <button onClick={()=>console.log("browser")}>
                   browser
               </button>
        </div>
    )

}

