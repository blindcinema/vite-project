import { useEffect, useState } from "react";

export default function() {
    
    const [dots,setDots] =useState("");
    const dotter = () => {
        if (dots.length < 3) {
            setDots(dots.concat("","."));
        }
        else {
            setDots("");
        }

    }
    useEffect(()=> {
        const intv =setInterval(dotter,1000);
        return () => clearInterval(intv);
    },[dots])



    return (
        <div className='hero-text' onClick={dotter}>
        Track It!<span style={{}}>{dots}</span>
    </div>
    )
}