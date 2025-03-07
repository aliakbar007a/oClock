import React from "react";
import { useState , useEffect } from "react";

export const AnalogClock = ()=>{
    const [time , setTime] = useState(new Date());
    console.log(time.getMinutes() * 6);
    
    
    useEffect(()=>{
        setInterval(()=>{
            setTime(new Date());
            
            
        },1000)
    })
    return(
        <div className="clock"> 
            <div className="centerdot"></div>
            <div className="hour twele">12</div>
            <div className="hour one">1</div>
            <div className="hour two">2</div>
            <div className="hour three">3</div>
            <div className="hour four">4</div>
            <div className="hour five">5</div>
            <div className="hour six">6</div>
            <div className="hour seven">7</div>
            <div className="hour eight">8</div>
            <div className="hour nine">9</div>
            <div className="hour ten">10</div>
            <div className="hour eleven">11</div>
            <div className="hour-hand " 
            style={{
                transform: `rotateZ(${time.getHours() * 30}deg)`
            }}
            ></div>
            <div className="min-hand " 
            style={{
                transform: `rotateZ(${time.getMinutes() * 6}deg)`
            }}
            ></div>
            <div className="sec-hand " 
            style={{
                transform: `rotateZ(${time.getSeconds() * 6}deg)`
            }}
            ></div>
            <div className="date">
                <h5>
                    {time.getFullYear()}/
                    {time.getMonth()}/
                    {time.getDate()}
                   
                </h5>
                
            </div>
        </div>
    )
}