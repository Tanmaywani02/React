import React, { useEffect, useState } from 'react'

function Trafficlight({trafficstate}) {
    
    const [currColor, setCurrColor] = useState("red")

    useEffect(()=>{
        const {duration, next} = trafficstate[currColor];
       

        const timerId = setTimeout(()=>{
            setCurrColor(next);
        }, duration);

        return()=>{
            clearTimeout(timerId);
        }
    },[currColor])
  return (
    <div className='tcontainer'>
        {Object.keys(trafficstate).map(((color)=>(
        
            <div className='tlights' style={{
                backgroundColor: color===currColor && trafficstate[color].backgroundColor
                }}>             
            </div>
        )))}

    </div>
  )
}

export default Trafficlight
