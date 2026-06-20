import React, { useEffect, useState } from 'react';

const CurrentTime = () => {
    const [time, setTime] =useState(new Date())

    useEffect(()=>{
        const intervalId = setInterval(()=>{
            setTime(new Date())
        }, 1000)

        return () =>{
            clearInterval(intervalId)
            
        }
    },[])
    return (
        <p className='lead'>This is the current time: {time.toLocaleString()} </p>
    );
};

export default CurrentTime;